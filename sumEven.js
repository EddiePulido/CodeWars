function sumEvenNumbers(input) {
  return input.reduce((acc, c) => {
    if(c % 2){
      return acc
    }else{
      return acc + c
    }
  }, 0)
}