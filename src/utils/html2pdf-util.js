import { jsPDF } from 'jspdf'
import $ from 'cash-dom'
// import SourceHanSerifC from '@/assets/font/SourceHanSerifC.ttf'
import { isHidden } from '../utils/utils.js'

const pixel_ratio = (function getOneMmsPx() {
  let div = document.createElement('div')
  div.id = 'mm'
  div.style.width = '1mm'
  document.querySelector('body').appendChild(div)
  let mm1 = document.getElementById('mm').getBoundingClientRect()
  // $(div).remove()
  div.remove()
  return mm1.width
})()
const dpi = pixel_ratio * 25.4 // 根据像素密度计算dpi

function px2pt(px) {
  return px / pixel_ratio // * 2.83465
}
function convertPixelsToPoints(pixels) {
  return (pixels * 72) / dpi
}

export default () => {
  console.log('html2pdf', pixel_ratio)
  // if (!window.$) throw new Error('jquery not found')
  const doc = new jsPDF()
  // doc.addFont(SourceHanSerifC, 'SourceHanSerifC', 'normal')
  // doc.setFont('SourceHanSerifC')
  $('.break-page')
    // .eq(5)
    // .not(':hidden')
    .each(function (index, el) {
      if (index !== 0) doc.addPage()
      generatePrintPage(el, doc)
    })
  doc.save('xxxxxxxxx')
}

// generatePrintPage
function generatePrintPage($rootElement, doc) {
  console.log($rootElement)
  doc.setFontSize(convertPixelsToPoints(12))
  const { top: pTop, left: pLeft } = $($rootElement).offset()
  // console.log('{ pTop, pLeft }: ', { pTop, pLeft })
  // const elements = []
  function traverseElement($element) {
    const elType = $element.nodeType
    // console.log('elType: ', elType)
    if (elType !== 1) return
    if (isHidden($element)) return
    const jqElement = $($element)
    const childNodes = Array.from($element.childNodes)
    if (childNodes.length === 0) return
    if (childNodes.every(n => n.nodeType === 3)) {
      const styles = window.getComputedStyle($element)
      const { lineHeight, fontSize, textAlign, fontWeight, fontFamily } = styles
      const { top, left } = jqElement.offset()
      // console.log('{ top, left }: ', { top, left })
      const params = [
        jqElement.text(),
        px2pt(left - pLeft),
        px2pt(top - pTop),
        {
          align: convertTextAlign(textAlign),
          maxWidth: px2pt(jqElement.outerWidth()),
          lineHeightFactor: parseFloat(lineHeight) / parseFloat(fontSize),
        },
      ]
      // console.log(JSON.stringify(params))
      doc.setFontSize(convertPixelsToPoints(parseFloat(fontSize)))
      doc.text(...params)
      return
    }
    if (childNodes.some(n => n.nodeType === 3)) {
      childNodes
        .filter(n => n.nodeType === 3)
        .forEach(n => {
          // 创建一个span元素
          const span = document.createElement('span')
          span.innerHTML = n.nodeValue
          // 替换原来的元素
          $element.replaceChild(span, n)
        })
    }
    Array.from($element.childNodes).forEach(n => traverseElement(n))
  }

  traverseElement($rootElement)

  // return elements
}

function convertTextAlign(textAlign) {
  return {
    'start': 'left',
    'end': 'right',
    'center': 'center',
    'justify': 'justify'
  }[textAlign] || 'left'
}