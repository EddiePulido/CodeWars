function meeting(x, need){
  if(!need) return 'Game On'
  let result = []
  let sum = 0
  
  for(arr of x){
    let count = arr[1] - arr[0].length
    if(count > 0){
      if(count + sum > need)
        count = need - sum
    }else{
      count = 0
    }
    sum += count
    result.push(count)
    if(sum === need) break;
  }
  
  return sum < need ? 'Not enough!' : result
  
  
}