function divisors(integer) {
  let arr = []
  
  for(let i = 2; i <= integer/2; i++){
    if(!(integer % i)) arr.push(i)
  }
  
  return !arr.length ? `${integer} is prime` : arr
};

let n = parseInt(readline());

let arr = []

for(let i = 2; i <= n; i++){

    if(n % i === 0){
        arr.push(i)
        n /= i
        i--
        
    }
}

console.log(arr.join(' ') || 1)