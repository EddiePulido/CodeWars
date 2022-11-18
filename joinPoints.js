function computeJoinPoint(s1, s2){

  while(s1 !== s2){
    if(s1 < s2)
      s1 = s1.toString().split('').reduce((a,c) => a + +c, s1)
    else
      s2 = s2.toString().split('').reduce((a,c) => a + +c, s2) 
  }
  
  return s1
}