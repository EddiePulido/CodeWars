function smartSum(){
  return [...arguments].flat().flat().reduce((a,c) => a + c, 0)
}