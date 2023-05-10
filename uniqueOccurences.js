var uniqueOccurrences = function(arr) {
  const count = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  const occur = {}

  for(key in count){
      if(occur[count[key]]) return false
      
      occur[count[key]] = true
  }

  return true
};