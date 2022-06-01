function addUsername(list) {
  // thank you for checking out the Coding Meetup kata :)
  
  
  list.forEach(person => {
    let username = person.firstName + person.lastName[0]
    
    const date = new Date().getFullYear()
    
    const birth = date - person.age
    
    person.username = username.toLowerCase() + birth
  })
  
  return list
}