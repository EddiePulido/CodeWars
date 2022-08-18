function calculate(str) {
  //your code here...
    let nums = str.split(/[a-z]+/)
    let ops = str.slice(nums[0].length,str.length-nums[nums.length-1].length).split(/[0-9]+/).reverse()
    nums.reverse()
    let num = +nums.pop()
    
    
    while(nums.length > 0){
      let op = ops.pop()
      if(op === 'plus'){
        num += +nums.pop()
      }else{
        num -= +nums.pop()
      }
    }
    
    return num.toString()
    
  }