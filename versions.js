function compareVersions (version1, version2) {
  let v1 = version1.split('.').map(e=>+e)
  let v2 = version2.split('.').map(e=>+e)

  const len = Math.max(v1.length, v2.length)
  
  for(let i = 0; i < len; i++){
    if(v1[i] < v2[i]) return false
    if(v1[i] > v2[i]) return true
    if(!v1[i] && v1[i] != 0) return false
  }
  return true 
}