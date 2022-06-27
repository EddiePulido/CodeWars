function to_nato(words) {
  const punc = ',.!?'
	return words.split(' ').join('').split('').map(c => punc.includes(c) ? c : NATO[c.toLowerCase()]).join(' ')
}