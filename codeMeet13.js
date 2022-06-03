function isLanguageDiverse(list) {
  let arr = [0,0,0]
  
  list.forEach(p => {
    switch(p.language){
      case 'JavaScript':
        arr[0] += 1
        break;
      case 'Ruby':
        arr[1] += 1
        break;
      default:
        arr[2] += 1
    }
  })
  
  
  
  arr.sort((a,b) => a - b)
  

  
  return arr[0] * 2 >= arr[2]
  
}