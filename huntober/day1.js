const day1 = str => {
  const code = {
    '0' : 'O',
    '1' : 'I',
    '2' : 'Z',
    '3' : 'E',
    '4' : 'h',
    '5' : 'S',
    '6' : 'G',
    '7' : 'L',
    '8' : 'B',
    '9' : 'q',
    'O' : '0',   
    'I' : '1',  
    'Z' : '2',  
    'E' : '3',  
    'h' : '4',  
    'S' : '5',  
    'G' : '6',  
    'L' : '7',  
    'B' : '8',  
    'q' : '9',   
  }

  return str.split('').map(x => code[x] ? code[x] : x ).join('')
}
let str1 = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."
let str2 = "PRO-TIP #498: IT'S NICE TO SAY HELLO."


console.log(day1(str1))
console.log(day1(str2))
console.log('')