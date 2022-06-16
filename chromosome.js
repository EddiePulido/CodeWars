function chromosomeCheck(sperm) {
  const congrats = "Congratulations! You're going to have a "
  return sperm[1] === 'Y' ? congrats + 'son.' : congrats + 'daughter.'
}