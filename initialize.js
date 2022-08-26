function initializeNames(name){
  const names = name.split(' ')
  if(names.length <= 2) return name
  
  const middle = names.slice(1,names.length-1).map(n => {
    return n[0].toUpperCase() + '.'
  }).join(' ')
  
  return `${names[0]} ${middle} ${names.slice(-1)[0]}`
}