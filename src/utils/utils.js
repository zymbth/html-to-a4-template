export function isHidden(element) {
  var style = window.getComputedStyle(element);
  return (style.display === 'none' || parseInt(style.height) === 0);
}

export function notHidden() {
  return this.filter(function (_, el) {
    return !isHidden(el);
  });
}