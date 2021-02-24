function throttle (func, delay = 500) {
  let timer = null
  return function () {
    const args = arguments, ctx = this
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      func && func.apply(ctx, args)
      timer = null
    }, delay)
  }
}
