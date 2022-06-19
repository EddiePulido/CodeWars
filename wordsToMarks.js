function wordsToMarks(string){
  return [...string].reduce((acc, c) => acc + c.charCodeAt() - 96, 0)
}