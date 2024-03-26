function tacofy(word) {
  const map = {
    t : "tomato",
    l : "lettuce",
    c : "cheese",
    g : "guacamole",
    s : "salsa",
    a : "beef",
    e : "beef",
    i : "beef",
    o : "beef",
    u : "beef"
  }
  
  return ['shell', ...[...word.toLowerCase()].filter(e => map[e]).map(e => map[e]), 'shell'] 
}