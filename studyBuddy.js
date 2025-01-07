/*
      Find First Duplicate
      Write a function findFirstDuplicate that takes an array of numbers and returns the first number that appears more than once. If there are no duplicates, return "happy new year".
*/
function findFirstDuplicate(nums) {
  let cache = {};
  for(const num of nums) {
    if(cache[num]) {
      return num;
    }
      cache[num] = 1;
  }
  return 'happy new year'
}
  // // Example output
  console.log(findFirstDuplicate([1, 2, 3, 4, 5, 2])); // → 2
  console.log(findFirstDuplicate([1, 2, 3, 4, 5])); // → "happy new year"
  console.log(findFirstDuplicate([3, 1, 3, 4, 2])); // → 3
/*
      Unique Characters
      Write a function hasUniqueCharacters that takes a string and returns true if all characters in the string are unique (case insensitive), and false otherwise.
*/
function hasUniqueCharacters(word){
  let lowerWord = word.toLowerCase();
  let cache = {};
  for(const char of lowerWord) {
    if(cache[char]);
      return false;
    cache[char] = 1;
  }
  return true;
}
console.log(hasUniqueCharacters("hello")); // -> false
console.log(hasUniqueCharacters("World")); // -> true
console.log(hasUniqueCharacters("abcde")); // -> true
console.log(hasUniqueCharacters("AaBbCc")); // -> false
/*
      Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value). "sumAllElements" will return the sum of the elements in the array starting at the initial value.
      Example:
      sumAllElements([1,2,3,4], 10) -> 20
      Note: Do NOT use any native JS methods, or loops
*/
console.log(sumAllElements([1,2,3,4], 10)); // -> 20
console.log(sumAllElements([0,2,3,4], 10)); // -> 19
function sumAllElements (array, initialVal, i = 0) {
    // base case
    if (!array[i]) return intialVal;
    // recursive case
    // let sum = initialVal + array[i];
    // let newI = i + 1;
    return sumAllElements (array, initialVal + array[i], i + 1) // function call
  }
/*
      Create a function "sumAllElements" that takes in two arguments (an array of numbers and a initial value).       "sumAllElements" will return the sum of the elements in the array starting at the initial value.
      Example:
      sumAllElements([1,2,3,4], 10) -> 20
      Note: Do NOT use any native JS methods, or loops
*/
function sumAllElements(nums, val){
  return helper(nums, val);
  function helper(nums, val, index = nums.length-1, count = nums.length) {
    if(count === 0)
      return val;
    return nums[index] + helper(nums, val, --index, --count);
  }
}
console.log(sumAllElements([1,2,3,4], 10)); // -> 20
console.log(sumAllElements([0,2,3,4], 10)); // -> 19
/*
      Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.
      example:
      const iRemember = memoryMaker();
      iRemember('hello'); -> ['hello']
      iRemember(1); -> ['hello', 1]
      iRemember('world'); -> ['hello', 1, 'world']
      iRemember(true); -> ['hello', 1, 'world', true]
*/
  function memoryMaker() {
    let cache = [];
    return function(val){
      cache.push(val);
      return cache;
    }
  }
const iRemember = memoryMaker();
console.log(iRemember('hello')); // -> ['hello']
console.log(iRemember(1)); // -> ['hello', 1]
console.log(iRemember('world')); // -> ['hello', 1, 'world']
console.log(iRemember(true)); // -> ['hello', 1, 'world', true]
/*
      Declare a function, 'List', which takes in no arguments and returns an instance of a 'List' object when invoked with the 'new' keyword.
      List objects should function similarly to an array - i.e., they will store values at numbered indexes, starting at 0. (You will later be creating methods to add values to the List.)
      All list objects should contain their own 'length' property, which keeps track of the number of items they contain. When a list is first created, it should have a length of 0.
*/
function List() {
  this.length = 0;
  return this;
}
let list = new List();
console.log(list.length); // 0