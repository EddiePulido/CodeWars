function countSmileys(arr) {
  let count = 0
  
  const eyes = [':', ';']
  const nose = ['-', '~']
  const mouth = [')', 'D']
  
  arr.forEach(face => {
    const e = face[0]
    const n = face[1]
    const m = face[face.length-1]
    
    if(face.length === 3){
      if(eyes.includes(e) && nose.includes(n) && mouth.includes(m)) count++
    }else if(face.length === 2){
      if(eyes.includes(e) && mouth.includes(m)) count++
    }
  })
  
  return count
}