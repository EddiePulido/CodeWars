const map = {
  P: 1,
  N: 3,
  B: 3,
  R: 5,
  Q: 9,
  K: 0
}

const arr = []

for (let i = 0; i < 8; i++) {
  const row = readline();
  for(c of row){
      if(c in map) arr.push(c)
  }
}
if(!arr.includes('K')){
  console.log(0)
}else if(arr.reduce((a,c) => a + +(c == 'B'), 0) == 2){
  console.log(arr.reduce((a,c) => a + map[c], 0) + 1)
}else{
  console.log(arr.reduce((a,c) => a + map[c], 0))
}