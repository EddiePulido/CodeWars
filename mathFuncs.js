
Math.ceil = function(n) {
  if(!n.toString().includes('.')) return n 
  return +n.toString().split('.')[0] + 1
};

Math.floor = function(n) {
  return +n.toString().split('.')[0]
};

Math.round = function(n) {
  let str = n.toString()
  if(str.includes('.')){
    let num = str.split('.')
    console.log(num[1])
    if(+num[1][0] >= 5) return +num[0]  + 1
    return +num[0]
  }
  
  return n 
};
