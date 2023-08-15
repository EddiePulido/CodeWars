function lastManStanding(n){
  let arr = Array.from({length: n}, (_,i) => i + 1)
  let left = true
  
  while(arr.length !== 1){
    let tempArr = []
    if(left){
      for(let i = 1; i < arr.length ; i+=2){
        tempArr.push(arr[i])
      }
    }else{
      for(let i = arr.length - 2; i >=0 ; i -= 2){
        tempArr.push(arr[i])
      }
      tempArr = tempArr.reverse()
    }
    left = !left
    arr = tempArr
  }
  
  return arr.pop()
}