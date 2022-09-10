let describeAge=a=>{
  let s="You're a(n) "
  return a<= 12?s+"kid":a<= 17?s+"teenager":a<= 64?s+"adult":s+"elderly"
}