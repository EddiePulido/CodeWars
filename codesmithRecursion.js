// Challenge 1
function countdown(n) {
	console.log(n)
  
  return n !== 1 || countdown(n-1)
}

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
function sum(array) {
	if(!array.length) return 0
  
  return array[0] + sum(array.slice(1))
}

// uncomment these to check your work
 // console.log(sum([1,1,1])); // -> returns 3
 // console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(str) {
	const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  str = str.toLowerCase()
  
  if(str.length <= 1) return true
  if(!alpha.includes(str[0])) return palindrome(str.slice(1))
  if(!alpha.includes(str.at(-1))) return palindrome(str.slice(0,-1))
  if(str[0] !== str.at(-1)) return false
  
  return palindrome(str.slice(1,-1))
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

//Challenge 5
function pathFinder(obj, arr) {
	const obj2 = obj[arr[0]]
  
  if(arr.length === 1) return obj2
  
  return pathFinder(obj2, arr.slice(1))
}

// const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr = ["first", "second", "third"];
// console.log(pathFinder(obj, arr));   //-> "finish"