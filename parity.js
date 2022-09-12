function solve(arr){
  for(let i = 0; i < arr.length; i++){
    let n = arr[i]
    if(n < 0){
      let opp = Math.abs(n)
      if(!arr.includes(opp)) return n
    }else{
      let opp = n - (n * 2)
      if(!arr.includes(opp)) return n
    }
  }
};