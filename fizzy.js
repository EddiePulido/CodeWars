//parameters: a number
//return: nothing
//example: fizzBuzz(5) => 1, 2, Fizz, 4, Buzz
//pseudo:
//  loop from 1 to n
//    if i % 15 === 0, print FizzBuzz
//    else if i % 5 === 0, print Buzz
//    else if i % 3 === 0, print Fizz
//    else print i


const fizzBuzz = n => {
  for(let i = 1; i <= n; i++){
    if(i % 15 === 0) console.log('FizzBuzz')
    else if(i % 5 === 0) console.log('Buzz')
    else if(i % 3 === 0) console.log('Fizz')
    else console.log(i) 
  }
}

fizzBuzz(100)