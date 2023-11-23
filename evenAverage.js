let sum = 0
let count = 0
for (let i = 0; i < 10; i++) {
    const n = parseInt(readline());
    if(n % 2 === 0){
        sum += n
        count++
    }
}

print(count ? `The average of the even numbers is: ${sum / count}` : 'No even numbers were entered.')