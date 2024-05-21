function highestScore(students) {
	let max = -Infinity
  let result = ''
  
  for(const person of students){
    if(person.score > max){
      max = person.score
      result = person.name.split(' ').map(e => e[0]).join('')+person.id
    }
  }
  
  return result
}