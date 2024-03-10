const x = parseInt(readline());
const y = parseInt(readline());
const z = parseInt(readline());

// Check if the operation is valid
if (x < 0 || y < 0 || z <= 0) {
    console.log("undefined");
} else {
    let result = 1;
    x = x % z;

    while (y > 0) {
        // If y is odd, multiply x with result
        if (y % 2 == 1)
            result = (result * x) % z;

        // y must be even now
        y = y >> 1; // y = y/2
        x = (x * x) % z;   // Change x to x^2
    }
    console.log(result);
}
