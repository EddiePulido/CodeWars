function rotate(str){
  if(!str) return []
  const arr = [...str].reduce((a,c,i) => (a.push(str.slice(i) + str.slice(0,i)),a),[])

  return arr.slice(1).concat(arr[0])
}