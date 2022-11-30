function absentVowel(x){
  let v = 'aeiou'
  let vowels = []
  
  for(c of x)
    if(v.includes(c) && !vowels.includes(c))
      vowels.push(c)
  
  for(let i = 0; i < v.length; i++)
    if(!vowels.includes(v[i]))
       return i
}