const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

function checkEquality(a1, a2){
  console.log(a1.join(''))
  return a1.join('') === a2.join('')
}

// function checkEquality(a, b) {
//   for(let i = 0; i < a.length; i++){
//     for(let j = 0; j < a[i].length; j++){
//       if(a[i][j] !== b[i][j]) return false
//     }
//   }

//   return true
// }
console.log(checkEquality(arr1, arr2))
console.log(checkEquality(arr1, arr3))
console.log(checkEquality(arr1, arr4))
