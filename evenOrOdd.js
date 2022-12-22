function evenOrOdd(str) {
  const count = [...str].reduce((a,c) => {
    if(c % 2) a[1] += +c
    else a[0] += +c
    return a
  },[0,0])
  
  console.log(count)
  
  if(count[0] > count[1]) return 'Even is greater than Odd'
  if(count[1] > count[0]) return 'Odd is greater than Even'
  
  return 'Even and Odd are the same'
}