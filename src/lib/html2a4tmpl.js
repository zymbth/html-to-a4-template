import $ from 'cash-dom'
import { notHidden, mTypeof } from '@/utils/utils.js'
import printStyle from '@/styles/print.css?inline'

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
 * @param {string|Element|HTMLCollection} root 页面容器，可传入选择器、元素、元素集合
 * @param {number} [recLimit=500] 递归限制，避免出现分页bug时死循环
 * @param {number} [pageLimit=500] 分页限制，避免出现分页bug时死循环
 * @returns {Object} {
 *   execPaging: 执行分页（请确保页面已经渲染完毕再执行）
 * }
 * 
 * @see https://github.com/zymbth/html-to-a4-template/blob/master/README.md
 */
export default function html2a4tmpl(root, recLimit = 500, pageLimit = 500) {
  // 参数无效时，使用默认值
  recLimit = isNaN(parseInt(recLimit)) ? 500 : parseInt(recLimit)
  pageLimit = isNaN(parseInt(pageLimit)) ? 500 : parseInt(pageLimit)
  // 参数限制，最低10
  if(recLimit < 1) recLimit = 10
  if(pageLimit < 1) pageLimit = 10

  // 添加 print 样式
  appendPrintStyle(printStyle)

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

  // Object.prototype.notHidden = notHidden
  $('body').__proto__.notHidden = notHidden

  /**
   * 将css字符串添加到head中
   * @param {string} css css string
   */
  function appendPrintStyle(css) {
    if(typeof css !== 'string') {
      console.error('print style is invalid')
      return
    }
    if(document.getElementById('print-style')) return
    const style = document.createElement('style')
    style.id = 'print-style'
    style.setAttribute('type', 'text/css')
    style.innerHTML = css
    document.head.append(style)
  }
  
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

    // 分页限制，避免出现分页bug时死循环
    let pageCount = 0
    // 依次处理break-page分页
    let pageEl = getNextPageEl()
    while(pageEl.length) {
      if(++pageCount > pageLimit) {
        console.error(`Pagination operation exceeds limit (${pageLimit} pages), you can change this limit in the initialization method.`)
        break
      }
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
      return $('.break-page').notHidden().first()
    } else {
      return pageEl.nextAll('.break-page').notHidden().first()
    }
  }

  /**
   * 对当前页，进行分页处理
   * 处理break-page分页（返回自己或分页后的new-break-page元素）
   * 
   * @param {Element} currPageEl 当前页
   * @param {number} [recCount] 递归计数
   * @returns {Element} 分页处理后最后一页，可能是自己（未超出一页，无需分页时）
   */
  function pagging(currPageEl, recCount = 0) {
    // 高度判断，超出需分页
    if (currPageEl.outerHeight() <= 294 * pixel_ratio + 5) return currPageEl
    // 递归限制，避免出现分页bug时死循环
    if(++recCount > recLimit) {
      console.error(`Pagination operation exceeds recursion limit (${recLimit} pages), you can change this limit in the initialization method.`)
      return currPageEl
    }
    // 准备分页
    const pageElOffsetTop = currPageEl.offset().top
    const pageElPaddingBottom = parseInt(currPageEl.css('paddingBottom'))
    let modified = false // 标记当前页是否被分割新页
    let new_div = null
    // 遍历当前页的所有分页单元
    currPageEl.find('.need-break').notHidden().each(function (index, el) {
      // 超出判断：当前元素的底部距离页面顶部的距离 + 当前元素的margin-bottom > 页面高度
      if (
        $(this).offset().top +
          $(this).outerHeight() -
          pageElOffsetTop +
          parseInt($(this).css('marginBottom')) <=
        294 * pixel_ratio - pageElPaddingBottom
      ) return true // 未超出，继续下一个元素

      modified = true // 标记当前页已修改
      let newClass = currPageEl.attr('class')
      // 新的页面元素添加类 new-break-page，仅作标识
      if (!currPageEl.hasClass('new-break-page')) newClass += ' new-break-page'
      new_div = $(`<div class="${newClass}" style="display:block"></div>`)

      // 第一个元素超出，该页固定高度，后续元素进入新页。此处有所取舍，这种状况可视作bug
      if(index === 0) {
        console.warn('There is an element that exceeds the page height, and the page height is fixed to avoid pagnation bug.')
        console.log(this)
        currPageEl.css('overflow', 'hidden')
        currPageEl.css('height', `${294 * pixel_ratio}px`)
        new_div.append($(this).nextAll().clone())
        $(this).nextAll().remove()
        currPageEl.after(new_div)
        return false // 跳出循环
      }

      // 分页情景
      // 一、表格跨页————拆分表格进下一页（new_div），包括表头、表体处理
      if ($(this).hasClass('table_break')) {
        splitTableBody.call(this, new_div, index)
      }
      // 二、表头跨页————拷贝表格本身及后续元素进下一页（new_div）
      else if ($(this).hasClass('thead_break')) {
        splitTableHead.call(this, new_div)
      }
      // 三、普通跨页————拷贝元素本身及后续元素进下一页（new_div）
      else {
        splitNormalEl.call(this, new_div)
      }
      currPageEl.after(new_div)
      // 跳出循环（一个break-page最多分页一次）
      return false
    })
    // 一次分页处理，只创建一个新页（new-break-page），新页也需分页处理（递归处理）
    return modified ? pagging(new_div, recCount) : currPageEl
  }

  /**
   * 普通元素分割处理
   * @param {Element} new_div 新页，用于存放分割后的元素
   * @returns 
   */
  function splitNormalEl(new_div) {
    if(!new_div || !this) return
    new_div.append($(this).clone())
    new_div.append($(this).nextAll().clone())
    $(this).nextAll().remove()
    $(this).remove()
  }
  // 表头分割处理
  function splitTableHead(new_div) {
    if(!new_div || !this) return
    new_div.append($(this).parents('table').clone())
    new_div.append($(this).parents('table').nextAll().clone())
    $(this).parents('table').nextAll().remove()
    $(this).parents('table').remove()
  }
  // 表格(tbody)分割处理
  function splitTableBody(new_div, index) {
    // 新表格
    var table = $(`<table class="${$(this).parents('table').attr('class')}"></table>`)
    table.append('<tbody></tbody>')
    var add_dom = $(this) // 当前行，也是跨页发生的行
    // td超过一页的处理（否则，该情况下会出现无限分页bug）
    let tmpFlag = index > 1
    if (index == 1) {
      tmpFlag = $(this).find('.need-break').notHidden().not('.thead_break').length !== 0
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
      const isFirstTr = add_dom.prev('tr').length === 0 // 是否是第一行
      // 4）常规处理：复制表格及后续元素到下一页
      table.children('tbody').append(copy_tr_dom.clone()) // copy tr
      table.children('tbody').append(add_dom.nextAll().clone()) // copy nextAll tr
      new_div.append(table) // 添加复制的表格
      new_div.append(add_dom.parents('table').nextAll().clone()) // 复制表格后元素到下一页
      add_dom.nextAll().remove() // remove nexAll tr
      add_dom.parents('table').nextAll().remove() // 移除表格后元素
      if(isFirstTr) add_dom.parents('table').remove()
      else add_dom.remove() // 移除tr
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

  return {
    execPaging
  }
}