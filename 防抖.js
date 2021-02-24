function debounce (func, delay = 500) {
  let timer = null
  return function () {
    const args = arguments, ctx = this
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func && func.apply(ctx, args)
    }, delay)
  }
}
