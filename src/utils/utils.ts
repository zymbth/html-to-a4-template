export function isHidden(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element)
  return style.display === 'none' || Number.parseInt(style.height) === 0
}

/**
 * typeof 获取数据类型
 * @link https://juejin.cn/post/7000300249235357709#heading-3
 * @param {any} value
 * @returns
 */
export function mTypeof(value: any): string {
  return value instanceof Element
    ? 'element'
    : Object.prototype.toString
      .call(value)
      .replace(/\[object\s(.+)\]/, '$1')
      .toLowerCase()
}

export function debounce(fn: Fn, delay: number = 300): Fn {
  let timer
  return (...args) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay, ...args)
  }
}
