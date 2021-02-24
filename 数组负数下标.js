Array.prototype.vAt = function (index) {
  if (isNaN(index = parseInt(index))) {
    return undefined
  }
  return index >= 0 ? this[index] : this[this.length + index]
}
