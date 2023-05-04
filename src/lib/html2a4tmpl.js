import $ from 'cash-dom'
import { notHidden, mTypeof } from '@/utils/utils.js'
import '@/styles/print.css'

/**
 * 公共分页工具方法
 * 
 * 页面容器：class="break-page"
 * 分页单元：class="need-break"，必须是页面容器的子元素，不可嵌套
 * 
 * 遍历页面容器元素，判断是否超出一页（A4尺寸），超出则执行分页（递归执行）
 * 页面容器，遍历所有分页单元，判断是否超出一页（A4尺寸），超出则从此处执行分页
 * 基本分页策略：将超出的元素及其所有后续元素移至下一页
 * 例如：
 * <div class="break-page">
 *  <div class="need-break">...</div>
 *  <div class="need-break">...</div>
 *  ...
 * </div>
 * 
 * 表格分页单元：加上类 break-table，对跨页的表格进行拆分
 * 后续其它特殊处理的分页单元，需添加标识，在分页程序中添加对应的处理程序
 * @returns {Object} {
 *   execPaging: 执行分页（请确保页面已经渲染完毕再执行）
 * }
 * 
 * @example see readme
 */
export default function html2a4tmpl(root) {
  // 获取浏览器1mm 像素长度
  const pixel_ratio = (function getOneMmsPx() {
    let div = document.createElement("div");
    div.id = "mm";
    div.style.width = "1mm";
    document.querySelector("body").appendChild(div);
    let mm1 = document.getElementById("mm").getBoundingClientRect();
    $('#mm').remove()
    return mm1.width;
  })();
  // console.log('pixel_ratio', pixel_ratio)

  // 分页程序递归限制，避免出现分页bug时死循环
  let recursionLimit = 500

  // Object.prototype.notHidden = notHidden
  $('body').__proto__.notHidden = notHidden

  
  // 执行分页
  function execPaging() {
    const rootParamType = mTypeof(root)
    let rootEl
    if(['string','element','htmlcollection'].includes(rootParamType)) rootEl = $(root)
    if(rootEl?.length) {
      rootEl.addClass('print-container')
      rootEl.children().notHidden().each(function () {
        $(this).addClass('break-page')
        $(this).children().notHidden().each(function (_, el) {
          if(el.tagName.toLowerCase() === 'table')
            $(this).addClass('break-table')
          else
            $(this).addClass('need-break')
        })
      })
    }

    console.log('start paging')
    $('table.break-table').children('thead').addClass('need-break thead_break')
    $('table.break-table tbody tr').addClass('need-break table_break');
    // 依次处理break-page分页
    let pageEl = getNextPageEl()
    while(pageEl.length) {
      pageEl = getNextPageEl(pagging(pageEl))
    }
    console.log('end paging')
  }

  /**
   * 获取下一个break-page
   * @param {Element} pageEl 当前页
   * @returns {Element} 下一页
   */
  function getNextPageEl(pageEl) {
    if(!pageEl) {
      // return $('.break-page').not(':hidden').first()
      return $('.break-page').notHidden().first()
      // return $('.break-page').first()
    } else {
      // return pageEl.nextAll('.break-page').not(':hidden').first()
      return pageEl.nextAll('.break-page').notHidden().first()
      // return pageEl.nextAll('.break-page').first()
    }
  }

  // 处理break-page分页（返回自己或分页后的new-break-page元素）

  /**
   * 对当前页，进行分页处理
   * @param {Element} currPageEl 当前页
   * @param {number} [count] 递归集数
   * @returns {Element} 分页处理后最后一页，可能是自己（未超出一页，无需分页时）
   */
  function pagging(currPageEl, count = 0) {
    if(--recursionLimit <= 0) {
      throw new Error('Recursion error when breaking page')
    }
    // 高度判断，超出需分页
    if (currPageEl.outerHeight() <= 294 * pixel_ratio + 5) {
      return currPageEl
    }
    if(++count > 50) {
      return currPageEl
    }
    // 准备分页
    const pageElOffsetTop = currPageEl.offset().top;
    const pageElPaddingBottom = parseInt(currPageEl.css('paddingBottom'))
    let modified = false
    let new_div = null
    // currPageEl.find('.need-break').each(function (index, el) {
    currPageEl.find('.need-break').notHidden().each(function (index, el) {
      // 超出判断：当前元素的底部距离页面顶部的距离 + 当前元素的margin-bottom > 页面高度
      if (
        $(this).offset().top +
          $(this).outerHeight() -
          pageElOffsetTop +
          parseInt($(this).css('marginBottom')) >
        294 * pixel_ratio - pageElPaddingBottom
      ) {
        modified = true
        let newClass = currPageEl.attr('class')
        // 新的页面元素添加类 new-break-page，仅作标识
        if (!currPageEl.hasClass('new-break-page')) newClass += ' new-break-page'
        new_div = $(`<div class="${newClass}" style="display:block"></div>`)
        // 分页情景
        // 一、表格跨页————拆分表格进下一页（new_div），包括表头、表体处理
        if ($(this).hasClass('table_break')) {
          // 新表格
          var table = $(`<table class="${$(this).parents('table').attr('class')}"></table>`)
          table.append('<tbody></tbody>')
          var add_dom = $(this) // 当前行，也是跨页发生的行
          // td超过一页的处理（否则，该情况下会出现无限分页bug）
          let tmpFlag = index > 1
          if (index == 1) {
            tmpFlag = $(this).find('.need-break').notHidden().not('.thead_break').length !== 0
            // tmpFlag = $(this).find('.need-break').not('.thead_break').length !== 0
          }
          if (tmpFlag) {
            table.prepend(add_dom.parents('table').children('thead').clone()) // 复制表头

            /**
             * 分割处理：
             * 存在纵向单元格合并，且当前tr不是合并的第一行
             * 计算当前行上一行每列向下占据(包括自身)的单元格数
             * 根据上一步结果，如果有必要，调整上一行单元格的rowspan，拷贝因分页导致纵向合并到当前行而被分割的单元格，然后设置新单元格的rowspan
             */
            // 当前td之前的所有tr
            let prevTrs = $(this).prevAll('tr')
            // 存储当前行每列向下占据(包括自身)的单元格数
            let rCounts = []
            /**
             * 存储当前行待处理的纵向合并单元格
             * @example
             * [undefined, undefined, [14,0,18,2], undefined, undefined]
             * 最新的纵向合并单元格是自当前行倒数第15行第1列，rowspan为18，colspan为2
             */
            let rCells = []
            // 1）从表格第一行开始，逐行遍历，计算每列的合并单元格数
            for (let i = prevTrs.length - 1; i >= 0; i--) {
              // 当前行
              const currTr = prevTrs[i],
                isFirstTr = i === prevTrs.length - 1
              // 当前行的所有td
              const curTds = $(currTr).find('td')
              // 如果不是第一行，需要减去上一行一整行
              if (!isFirstTr) rCounts = rCounts.map(p => (p - 1 > 0 ? p - 1 : 0))
              // 如果是第一行，需要初始化rCounts
              if (isFirstTr) {
                let cols = 0
                for (let j = 0, len = curTds.length; j < len; j++)
                  cols += +$(curTds[j]).attr('colspan') || 1
                rCounts = new Array(cols).fill(0)
              }
              // 遍历当前行的所有td，计算每列需要向下占据(包括自身)的单元格数（包括本行）
              for (let j = 0, len1 = curTds.length; j < len1; j++) {
                const currTd = curTds[j] // 当前td
                const rowspan = +$(currTd).attr('rowspan') || 1 // 当前td的rowspan
                const colspan = +$(currTd).attr('colspan') || 1 // 当前td的colspan
                // 如果当前td的colspan大于1，需要计算每列的合并单元格数（向下占据(包括自身)的格数一致）
                if (colspan > 0) {
                  // 找到当前td的起始列下标（区分td在当前行内的下标与表格行中的实际列数），插入占格数到rCounts
                  let startIdx = rCounts.findIndex(p => p < 1)
                  // td横向合并涵盖的列，都需要加上rowspan
                  for (let k = 0; k < colspan; k++) {
                    rCounts[startIdx + k] = (rCounts[startIdx + k] || 0) + rowspan
                  }
                  // 记录待处理的纵向合并单元格
                  if (rowspan > 1) {
                    rCells[startIdx] = [i, j, rowspan, colspan]
                    for (let k = 1; k < colspan; k++) rCells[startIdx + k] = undefined
                  }
                }
              }
            }
            // 2）当前行每列向下占据(包括自身)的单元格数。rCounts最终保存的是上一行的
            // N表示空(被前面行中的单元格占据)，数字表示第几列例如：
            // ['N', 'N', 'N', 'N', 'N', 'N', 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4]
            let currRCounts = rCounts.map(p => (p > 1 ? 'N' : 0))
            add_dom.find('td').each(function (idx1) {
              const colspan = +$(this).attr('colspan') || 1
              const startIdx = currRCounts.findIndex(p => p === 0)
              for (let i = 0; i < colspan; i++) {
                currRCounts[startIdx + i] = idx1 + 1
              }
            })

            // 3）生成新的tr
            // 3.1）处理分割单元格，修改老的rowspan，生成当前行所需的新的单元格
            const splitTds = {} // 存储因分页导致纵向合并到当前行而被分割的单元格，等待插入下一页的表格中
            for (let x = 0; x < rCells.length; x++) {
              if (!rCells[x]) continue // 跳过：当前列没有过纵向合并单元格
              const [i, j, rowspan, colspan] = rCells[x] || []
              const splitTdRs = rowspan - i - 1 // 当前列纵向合并单元格被分割到当前行的个数（新的rowspan）
              if (splitTdRs <= 0) continue // 跳过：当前列有过纵向合并单元格，但是没有被分割到当前行
              const prevTd = $(prevTrs[i]).find('td')[j] // 待分割处理单元格
              $(prevTd).attr('rowspan', rowspan - splitTdRs) // 修改原单元格的rowspan
              const splitTd = $(prevTd).clone().attr('rowspan', splitTdRs) // 生成新的单元格
              const splitTdTag = 'splitTd' + x // 生成新的单元格的标识
              splitTds[splitTdTag] = splitTd // 存储新的单元格
              let startIdx = currRCounts.findIndex(p => p === 'N') // 找到当前行的空位
              if (startIdx === -1) continue // 跳过：当前行没有空位，不需要插入分割的单元格
              // currRCounts中填充空位
              for (let k = 0; k < colspan; k++) currRCounts[startIdx + k] = splitTdTag
            }
            // 按顺序将原单元格，分割后的单元格插入到当前行
            const copy_tr_dom = add_dom.clone().empty()
            ;[...new Set(currRCounts)].forEach(p => {
              if (typeof p === 'string') {
                copy_tr_dom.append(splitTds[p])
              } else {
                copy_tr_dom.append(
                  add_dom
                    .find('td')
                    .eq(p - 1)
                    .clone()
                )
              }
            })

            // 4）常规处理：复制表格及后续元素到下一页
            table.children('tbody').append(copy_tr_dom.clone()) // copy tr
            table.children('tbody').append(add_dom.nextAll().clone()) // copy nextAll tr
            new_div.append(table) // 添加复制的表格
            new_div.append(add_dom.parents('table').nextAll().clone()) // 复制表格后元素到下一页
            add_dom.nextAll().remove() // remove nexAll tr
            add_dom.parents('table').nextAll().remove() // 移除表格后元素
            add_dom.remove() // 移除tr
          } else {
            if (add_dom.nextAll().length) {
              // 有后序表格：拷贝表格及后续元素
              table.prepend(add_dom.parents('table').children('thead').clone())
              table.children('tbody').append(add_dom.nextAll().clone())
              add_dom.nextAll().remove()
              new_div.append(table)
              new_div.append(add_dom.parents('table').nextAll().clone())
              add_dom.parents('table').nextAll().remove()
            } else {
              new_div.append(add_dom.parents('table').nextAll().clone())
              add_dom.parents('table').nextAll().remove()
            }
            // 跨页且无法分割的tr（存在占一整页的单元格，单元格是最小分割单元，无法处理）
            // 方案：为避免分页bug，移入定高容器中（内容显示不全）
            let tmp_div = $(
              `<div style="height:${294 * pixel_ratio - 100}px;overflow:hidden;"></div>`
            ) // 定高容器
            add_dom.parents('.break-page').append(tmp_div)
            tmp_div.append(add_dom.parents('table'))
          }
        }
        // 二、表头跨页————拷贝表格本身及后续元素进下一页（new_div）
        else if ($(this).hasClass('thead_break')) {
          new_div.append($(this).parents('table').clone())
          new_div.append($(this).parents('table').nextAll().clone())
          $(this).parents('table').nextAll().remove()
          $(this).parents('table').remove()
        }
        // 三、普通跨页————拷贝元素本身及后续元素进下一页（new_div）
        else {
          new_div.append($(this).clone())
          new_div.append($(this).nextAll().clone())
          $(this).nextAll().remove()
          $(this).remove()
        }
        currPageEl.after(new_div)
        // 跳出循环（一个break-page最多分页一次）
        return false
      }
    })
    // 一次分页处理，只创建一个新页（new-break-page），新页也需分页处理（递归处理）
    return modified ? pagging(new_div, count) : currPageEl
  }

  return {
    execPaging
  }
}