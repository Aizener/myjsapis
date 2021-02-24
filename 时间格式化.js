Date.prototype.format = function (format = 'yyyy-mm-dd hh:MM:ss') {
  const year = this.getFullYear().toString()
  const month = this.getMonth().toString().padStart(2, '0')
  const date = this.getDate().toString().padStart(2, '0')
  const hours = this.getHours().toString().padStart(2, '0')
  const minutes = this.getMinutes().toString().padStart(2, '0')
  const seconds = this.getSeconds().toString().padStart(2, '0')
  const regs = {
    'y+': year,
    'm+': month,
    'd+': date,
    'h+': hours,
    'M+': minutes,
    's+': seconds
  }
  for (let k in regs) {
    format = format.replace(new RegExp(k), regs[k])
  }
  return format
}
