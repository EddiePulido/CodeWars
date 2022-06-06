function DNAStrand(dna){
  const map = {
    'A' : 'T',
    'T' : 'A',
    'C' : 'G',
    'G' : 'C'
  }
  
  return dna.split('').map(char => map[char]).join('')
}