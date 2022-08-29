function findMissingLetter(array){
  for(let i = 0; i < array.length - 1; i++){
    const cc = array[i].charCodeAt()
    if(array[i+1].charCodeAt() !== cc + 1)
      return String.fromCharCode(cc+1)
  }
}