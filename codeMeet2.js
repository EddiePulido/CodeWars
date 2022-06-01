function greetDevelopers(list) {
  // thank you for checking out my kata :)
  let greetmid = ', what do you like the most about'
  
  return list.map(person => {
    return ({...person,greeting: `Hi ${person.firstName}${greetmid} ${person.language}?`})
  })
}