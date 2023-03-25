function sortEmotions(arr, order){
  const emos = order ? [ ':D', ':)', ':|', ':(', 'T_T' ] : [ 'T_T', ':(', ':|', ':)', ':D' ]
  
  return arr.sort((a,b) => emos.indexOf(a) - emos.indexOf(b))
}