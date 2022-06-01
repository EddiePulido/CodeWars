function countDevelopers(list) {
  // your awesome code here :)
  return list.filter(person => person.continent === 'Europe' && person.language === 'JavaScript').length
}