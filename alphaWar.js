function alphabetWar(fight){
  const left = {w : 4, p : 3, b : 2, s : 1}
  const right = {m : 4, q : 3, d : 2, z : 1}
  
  fight = [...fight].filter((e, i, a) => {
    return e !== '*' && a[i + 1] !== '*' && a[i - 1] !== '*' 
  }).join('')
  
  const result = [...fight].reduce((a,c) => {
    if(left[c]) a.left += left[c]
    if(right[c]) a.right += right[c]
    return a
  }, {right : 0, left: 0})
  
  if(result.right === result.left) return "Let's fight again!"
  return result.right > result.left ? 'Right side wins!' : 'Left side wins!'
}