const rotate = (str) =>  str.slice(1) + str[0]
const sumEven = (str) => str.split('').reduce((acc, c) => acc + Number(c) ** 3, 0) % 2 === 0
const rev = (str) => str.split('').reverse('').join('')

function revrot(str, sz) {
  if(!str || !sz) return ''
  
  let result = ''
  let i = 0
  
  while(i < str.length){
    if(i + sz <= str.length){
      let chunk = str.slice(i,i+sz)
      sumEven(chunk) ? result += rev(chunk) : result += rotate(chunk)
    }
    i += sz
  }
  
  return result
}