function phoneWords(str) {
  let nums = {
    '2' : 'a',
    '22' : 'b',
    '222' : 'c',
    '3' : 'd',
    '33' : 'e',
    '333' : 'f',
    '4' : 'g',
    '44' : 'h',
    '444' : 'i',
    '5' : 'j',
    '55' : 'k',
    '555' : 'l',
    '6' : 'm',
    '66' : 'n',
    '666' : 'o',
    '7' : 'p',
    '77' : 'q',
    '777' : 'r',
    '7777' : 's',
    '8' : 't',
    '88' : 'u',
    '888' : 'v',
    '9' : 'w',
    '99' : 'x',
    '999' : 'y',
    '9999' : 'z',
    '0' : ' '
  }
  
  let ans = ''
  
  for(let i = 0; i < str.length; i++){
    if(str[i] === '1') continue
    let num = 4
    while(!nums[str.slice(i,i+num)]) num--
    ans += nums[str.slice(i,i+num)]
    i += num - 1
  }
  
  return ans
}