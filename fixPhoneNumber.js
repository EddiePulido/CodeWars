function isItANum(str) {
  const num = [...str].filter(e => '0123456789'.includes(e)).join('')
  return num.length === 11 && num[0] === '0' ? num : 'Not a phone number'
}