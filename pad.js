function solution(value){
  let result = '00000' + value.toString()

  return `Value is ${result.slice(-5)}`
}