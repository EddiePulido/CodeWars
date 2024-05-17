

/* ========== *
* Challenge 1 *
* =========== */

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === 'number')
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

// myVar = 'eddie'//add your name here
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished


/* ========== *
* Challenge 2 *
* =========== */


function buildSentence(word1, word2, word3) {
  const str = [word1, word2, word3].join(' ')
	console.log(str[0].toUpperCase() + str.slice(1).toLowerCase() + '.')
}
