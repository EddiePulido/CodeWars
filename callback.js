const addTwoNums = (num1, num2) => {
  return num1 + num2
}

const callback = () => console.log("IN THE CALLBACK FUNCTION")

console.log(addTwoNums(4,5,callback))
