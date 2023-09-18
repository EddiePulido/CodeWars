const [a,b] = readline().split(' / ').map(Number)


function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }

let g = gcd(a,b)

if(b == 0){
    console.log('INVALID')
}else{
    console.log(a/g + ' / ' + b/g)
}
