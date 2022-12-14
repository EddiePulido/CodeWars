var findLucky = function(arr) {
  let hash = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  let largest = -1
  for(k in hash){
      if(k == hash[k]){
          if(+k > largest)
              largest = +k
      }
  }

  return largest
};