function outed(meet, boss){
  const happiness = Object.keys(meet).reduce((a,c) => (console.log({a,c}),c === boss ? a + meet[c]*2 : a + meet[c]), 0)

  return happiness / Object.keys(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}