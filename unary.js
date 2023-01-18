// Write a simple calculator that operates in unary to sum a sequence of positive integers.

// Unary is the bijective numeration base 1, using the digit 1 to represent 1 but lacking a zero digit. It is a positional numbering system, but trivially so, since every position, as a power of 1, is a ones place, regardless of left or right direction.

// Starting from 1, the first five numbers in unary are 1, 11, 111, 1111, and 11111.

// The unary representation of a positive integer is the concatenation of the unary representation of the integer's digits, in order, with the unary representation of the integer's digit count appended to the end.

const count = parseInt(readline());
const numbers = readline().split(' ').map(x => parseInt(x));
const unary = numbers.map(x => {
    const unary = '1'.repeat(x);
    return unary + '1'.repeat(unary.length);
}
);
const sum = unary.reduce((a,c) => a + c, '');
print(sum);