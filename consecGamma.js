const removeConsecutiveDuplicates = s => {
  let arr = s.split(' ')
  let result = []
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]) result.push(arr[i])
  }
  
  return result.join(' ')
}

const removeConsecutiveDuplicates = s => s.split(' ').filter((w,i,a) => w !== a[i+1]).join(' ')
