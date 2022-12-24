function stringMerge(string1, string2, letter){
  const id1 = string1.indexOf(letter)
  const id2 = string2.indexOf(letter)
  
  return string1.slice(0,id1) + string2.slice(id2)
}