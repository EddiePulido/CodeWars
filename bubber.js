function persistence(num) {
  let count = 0
  let str = num.toString()
  
  while(str.length != 1){
    count++
    str = str.split('').reduce((acc, c) => acc * Number(c), 1).toString()
  }
 return count
}