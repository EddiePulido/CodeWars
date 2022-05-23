function encode(str,  n){
  
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  
  const map = {}
  
  const nums = []
  
  const num = n.toString()
  
  for(let i = 0; i< alpha.length; i++){
    map[alpha[i]] = i + 1
  }
  
  for(let i = 0; i < str.length; i++){
    nums.push(map[str[i]] + parseInt(num[i % num.length]))
  }
  return nums
}
