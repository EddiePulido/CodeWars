// complete the function
function solution(string) {
  let result = ''
  
  function isCapital(char){
    return char === char.toUpperCase()
  }

  for(let i = 0; i < string.length; i++){
    if(isCapital(string[i])) result += ' '
    result+= string[i]
  }

return result
}


