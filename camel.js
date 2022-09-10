String.prototype.camelCase=function(){
  let str = this.toString().trim()
  
  console.log(str)
  
  return str.split(' ').map(w => {
    return w.length ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ''
  }).join('')
}