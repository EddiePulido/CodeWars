var inputs = readline().split(' ');
const num1 = parseInt(inputs[0]);
const num2 = parseInt(inputs[1]);


const isPrime = n => {
    if(n == 2){
        return 1
    }
    if(n < 2) return 0

    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return 0
        }
    }

    return 1
}

print(isPrime(num1) + ' ' + isPrime(num2))