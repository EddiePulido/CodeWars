// You will be given a code, and you must decipher it. The string is separated into compartments by "|", and further, the numbers in the compartment are separated by commas ( , ). Each compartment stands for an alphabet in the final deciphered code. The alphabets in the final deciphered code are simply the nth alphabet according to the alphabet series ( where n = the sum of numbers in a compartment ).
// For example, if input = "0,1|12,4|10,6", the sum of numbers in the compartment are "1|16|16".
// a is the first alphabet and p is the sixteenth alphabet. So, the output is app.

// Note: Sometimes, the sum of the numbers may exceed 26. Like, if the sum is 27, in that case, a is the 27th alphabet. The output must always be in lower case.

// Input
// 0,1|12,4|10,6

// Output
// app

const code = readline();
const code2 = code.split('|')
const code3 = code2.map(x => x.split(','))
const code4 = code3.map(x => x.map(y => parseInt(y)))
const code5 = code4.map(x => x.reduce((a,c) => a + c, 0))
const code6 = code5.map(x => x % 26)
const code7 = code6.map(x => String.fromCharCode(x + 96))
print(code7.join(''))
