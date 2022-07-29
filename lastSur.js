function lastSurvivor(letters, coords) {
  let j = 0
  while(letters.length != 1){
    letters = [...letters].filter((e,i) => i != coords[j]).join('')
    j++
    console.log({letters})
  }
  
  return letters
}