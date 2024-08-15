// *************************************************************************
//Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.



console.log(mostFrequentChar('bookeeper')) // -> 'e'
console.log(mostFrequentChar('david')) // -> 'd'
console.log(mostFrequentChar("riverbed")) // -> 'r'

// *************************************************************************
//Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). This function should return a new array containing *only* the functions from the original array that, when invoked with input, return the value output. Use reduce!

const functionValidator = (funcArr, input, output) => {

}

// const addFive = num => num + 5;
// const multiplyByTwo = num => num * 2;
// const subtractOne = num => num - 1;
// const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]
// *************************************************************************
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.


const after = (count, func) => {

};

const called = () => console.log('hello');
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

// *************************************************************************
// One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

// Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

// instead of including i or I put the number 1 in the password;
// instead of including o or O put the number 0 in the password;
// instead of including s or S put the number 5 in the password.
// Examples:
// "Give me liberty or give me death"  --> "Gml0gmd"
// "Keep Calm and Carry On"            --> "KCaC0"

//console.log(makePassword("Give me liberty or give me death")) // -> "Gml0gmd"
//console.log(makePassword("Keep Calm and Carry On")) // "KCaC0"Delete Duplicates

Write a function that takes in an array and returns a new array with duplicates removed

Ex: deleteDups(['a','a','a']) -> ['a']

Ex: deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> ['a', 'b', 'c', 'd']
// *************************************************************************
//Modify the function so that it returns the length of an array recursively, without using the .length property. Use recursion!

function getLength(array, i = 0) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(getLength([1])); // -> 1
// console.log(getLength([1, 2])); // -> 2
// console.log(getLength([1, 2, 3, 4, 5])); // -> 5




// *************************************************************************


// Delete Duplicates

// Write a function that takes in an array and returns a new array with duplicates removed

// Ex: deleteDups(['a','a','a']) -> ['a']

// Ex: deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> ['a', 'b', 'c', 'd']


function deleteDups(arr) {

}

// Extension: solve in 0(n) time

function dupsTests() {
  console.log(deleteDups(['a', 'a', 'a', 'a', 'a']), ' -> [a]');
  console.log(deleteDups(['a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
  console.log(deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
}

// dupsTests() // Uncomment to check code!



// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]


