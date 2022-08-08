function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(w => w.length > n)
}