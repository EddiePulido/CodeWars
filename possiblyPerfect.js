function possiblyPerfect(key,answers) {
  let correct = key.every((e,i) => e === '_' || e === answers[i])
  let incorrect = key.every((e,i) => e === '_' || e !== answers[i])
  
  return correct || incorrect
}