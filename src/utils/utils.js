export function isHidden(element) {
  var style = window.getComputedStyle(element)
  return style.display === 'none' || parseInt(style.height) === 0
}

export function notHidden() {
  return this.filter(function (_, el) {
    return !isHidden(el)
  })
}

/**
 * typeof 获取数据类型
 * @link https://juejin.cn/post/7000300249235357709#heading-3
 * @param {any} value
 * @returns
 */
export function mTypeof(value) {
  return value instanceof Element
    ? 'element'
    : Object.prototype.toString
        .call(value)
        .replace(/\[object\s(.+)\]/, '$1')
        .toLowerCase()
}

export function debounce(fn, delay = 300) {
  let timer
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay, ...args)
  }
}
