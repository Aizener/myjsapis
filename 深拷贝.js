function deepCopy (target) {
  let _target = {}
  for (let k in target) {
    if (typeof target[k] === 'object') {
      _target[k] = deepCopy(target[k])
    } else {
      _target[k] = target[k]
    }
  }
  return _target
}
