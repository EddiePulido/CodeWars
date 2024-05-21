

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
function lastLetter(word) {
	console.log(word.slice(-1))
}

function buildGreeting(time, name) {
	if(time >= 0 && time <= 11){
    console.log('Good Morning, ' + name)
  }else if(time >= 12 && time <= 16){
    console.log('Good Afternoon, ' + name)
  }else if(time >= 17 && time <= 24){
    console.log('Good Evening, ' + name)
  }else{
    console.log(`That's not a real time, ${name}. Maybe you need some sleep!`)
  }

}


function letterExists(word, letter) {
	console.log(word.indexOf(letter) !== -1)
}

function isPrime(number) {
  let bool = true
  if(number < 2) bool = false
  
  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i === 0){
      bool = false
      break
    }
  }
  
	console.log(bool)

}

const indexOf = (str, c) => {
	for(let i = 0; i < str.length; i++){
    if(str.slice(i,i+c.length) === c) return i
  }
  
  return -1
}

function range(start, end) {
	console.log(Array.from({length: end-start+1}, (_,i) => i + start).join(', '))
}

function myIndexOf(array, ele){

	
  for(let i = 0; i < array.length; i++){
    if(array[i] === ele){
    	console.log(i)
      return
    }
  }

  console.log(-1)
}

function unique(arr) {
	console.log([...new Set(arr)])
}

function longestWord(sentence) {
	const len = Math.max(...sentence.split(' ').map(e=>e.length))

  return sentence.split(' ').reverse().find(e => e.length === len)
}
