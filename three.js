function divisibleByThree(str){
  let num = [...str].reduce((acc, c) => acc + +c, 0) / 3
  return num === Math.floor(num)
}