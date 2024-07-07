const itemRetriever = (arr, key) => {
  let i = 0;
  
  return () => {
    if(i === arr.length) i = 0
    
    return arr[i++][key]
  }
}