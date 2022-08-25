function isValidIP(str) {
  const arr = str.split('.')
  if(arr.length !== 4) return false;

  for(let i = 0; i < arr.length; i++){
    let n = arr[i]

    if(isNaN(n) || n.includes(' ') || n.includes('e') || (n.startsWith('0') && n.length > 1)|| n.includes('\n')) return false
    if(Number(n) < 0 || Number(n) > 255 || !n) return false
  }
  
  return true
}