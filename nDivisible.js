function isDivisible(){
  const [num, ...others] = arguments
  return others.every(n => num % n === 0)
}