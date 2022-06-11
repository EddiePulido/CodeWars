const correct = (str) => {
	const map = {
    '5' : 'S',
    '0' : 'O',
    '1' : 'I'
  }
  
  return str.split('').map(char => map[char] ? map[char] : char).join('')
}