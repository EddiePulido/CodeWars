const n = readline()

let map = {
    o: '0',
    l: '1'
}

let s = 1

let num = parseInt([...n].map(e => map[e]).join(''), 2)

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

print(factorial(num))
