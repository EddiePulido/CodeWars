function doubleChar(str) {
  let array = str.split('')
  for(let i = array.length-1; i >=0; i--){
    array.splice(i,0,array[i])
  }
  
  console.log(array)
}

console.log(doubleChar('abcd'))