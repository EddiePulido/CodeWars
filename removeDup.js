function removeDuplicateWords (s) {
  let result = []
  
  s.split(' ').forEach(e => {
    if(!result.includes(e)) result.push(e)
  })
                      
  return result.join(' ')
} 