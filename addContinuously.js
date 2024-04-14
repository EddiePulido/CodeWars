const add = arr => {
  let sum = 0
  return arr.reduce((a,c) => {
    sum += c
    a.push(sum)
    return a
  },[])
}