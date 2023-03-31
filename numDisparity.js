function solve(a){
  a = a.filter(e => e===0 || Number(e))
  
  const nums = a.reduce((a,c) => (c % 2 ? ++a.o : ++a.e, a), {e:0, o:0})

  return nums.e - nums.o
}