function tailSwap(arr) {
  const [a,b,c,d] = [...arr[0].split(':'),...arr[1].split(':')]
  
  return [a+':'+ d, c + ':' + b]
}