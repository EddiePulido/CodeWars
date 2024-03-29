/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const a = parseInt(readline());
const n = parseInt(readline());

function tetration(base, height) {
    if (height === 1) {
        return base;
    } else {
        let result = base;
        for (let i = 1; i < height; i++) {
            result = Math.pow(base, result);
        }
        return result;
    }
}

// Example usage:
console.log(tetration(a,n));  // Output: 16