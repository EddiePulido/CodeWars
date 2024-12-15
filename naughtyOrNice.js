const getNiceNames = people => people.filter(e => e.wasNice).map(person => person.name)

const getNaughtyNames = people => people.filter(e => !e.wasNice).map(person => person.name)