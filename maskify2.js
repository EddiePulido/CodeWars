function maskify(cc) {
  if(cc.length <= 4) return cc
  
  return cc.split('')
          .map((item, i) => i > cc.length - 5 ? item : '#')
          .join('')
}
