
// Challenge 6
function reduce(array, callback, initialValue) {
	let result = initialValue
  
  for(const e of array){
    result = callback(result, e)
  }
  
  return result
}

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0));   //-> 8


// Challenge 7
function intersection(arrays) {

	return arrays.reduce((a,c) => {
    const set = new Set(c)
    return a.filter(e => set.has(e))
  }, arrays[0] )
}

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
//should log: [5, 15]


// Challenge 8
function union(arrays) {
	return [...new Set(arrays.flat(1))]
}

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
	const obj = {}
  
  for(let i = 0; i < array1.length; i++){
    const a = array1[i]
    const b = array2[i]
    if(callback(a) === b){
      obj[a] = b
    }
  }
  
  return obj
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
	const obj = {}
  
  for(const val of arrVals){
    obj[val] = []
    
    for(const cb of arrCallbacks){
      obj[val].push(cb(val))
    }
  }
  
  return obj
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
	const result = {}
  
  for(const key in obj){
    if(callback(key) === obj[key]){
      result[key] = obj[key]
    }
  }
  
  return result
}

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
	return array.reduce((a,c) => a + +(callback(c)), 0) > array.length / 2
}

// /*** Uncomment these to check your work! ***/
// const isOdd = (num) => num % 2 === 1;
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
	const trueVals = array.filter(callback)
  const falseVals = array.filter(e => !callback(e))
  
  return trueVals.concat(falseVals)
}

// /*** Uncomment these to check your work! ***/
// const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
// ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
	const result = {}
  
  for(const e of array){
    const r = callback(e)
    
    result[r] = ++result[r] || 1
  }
  
  return result
}

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
	const result = {}
  
  for(const e of array){
    const r = callback(e)
    
    if(!(r in result)){
      result[r] = []
    }
    
    result[r].push(e)
  }
  
  return result
}

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
	const result = []
  
  for(const key in obj){
    if(callback(obj[key])){
      result.push(key)
    }
  }
  
  return result
}

// /*** Uncomment these to check your work! ***/
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
