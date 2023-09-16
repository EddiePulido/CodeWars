const white = {
  P: 1,
  N: 3,
  B: 3,
  Q: 9,
  R: 5,
}

const black = {
  p: 1,
  n: 3,
  b: 3,
  q: 9,
  r: 5
}

let b = 0
let w = 0

for (let i = 0; i < 8; i++) {
  const line = readline()

  for(c of line){
      if(c in black){
          b += black[c]
      }
      if(c in white){
          w += white[c]
      }
  }
}

const color = b > w ? 'black' : 'white'

console.log(b === w ? `equal ${w} ${b}` : `${color} is better ${w} ${b}`)