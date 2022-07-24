function datingRange(age){
  let bool = age > 14
  let min = bool ? age / 2 + 7 : age - .1 * age
  let max = bool ? (age - 7) * 2 : age + .1 * age
  return `${Math.floor(min)}-${Math.floor(max)}`
}