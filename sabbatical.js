function sabb(s, val, happiness){
  s = s.toLowerCase()
  
  const score = [...s].reduce((a,c) => 'sabticl'.includes(c) ? ++a : a, 0) + val + happiness
  
  return score > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}