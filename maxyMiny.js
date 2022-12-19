function max(){
  let arr = Array.from(arguments).flat(10000)
  if(arr.length === 0) return +0
  return +arr.reduce((a,c) => +c > a || isNaN(+c) ? +c : a, +arr[0])
}

function min(){
  let arr = Array.from(arguments).flat(1000)
  if(arr.length === 0) return +0
  return +arr.reduce((a,c) => +c < a || isNaN(+c) ? +c : a, +arr[0])
}