function foldArray(array, runs){
  let arr = array
  let j = array.length - 1;

  while(runs--){ 
    let tempArr = []
    for(let i = 0; i < arr.length / 2; i++){
      if(i === j) tempArr.push(arr[i])
      else tempArr.push(arr[i] + arr[j--])
    }
    arr = tempArr
  }
  
  return arr
}