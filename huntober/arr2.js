myArray = ['abc', 'xyz', 1, 2, 'Hey!']

const moveLeft =(arr, n) => {
  let index = arr.indexOf(n)
  if(index === 0) return arr
  let temp = arr[index - 1]
  arr[index - 1] = arr[index]
  arr[index] = temp
  return arr
}

const moveRight =(arr, n) => {
  let index = arr.indexOf(n)
  if(index === arr.length - 1) return arr
  let temp = arr[index + 1]
  arr[index + 1] = arr[index]
  arr[index] = temp
  return arr
}

// call move left function with 'xyz' and myArray as arguments
moveLeft(myArray, 'xyz')
console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// call move left function again, same arguments
// Note that 'xyz' is already as far left as it can go
moveLeft(myArray, 'xyz')
console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// call move right function this time, with 2 and myArray as arguments
moveRight(myArray, 2)
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// call move right function again, same arguments
// Note that 2 is already as far right as it can go
moveRight(myArray, 2) 
console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change
