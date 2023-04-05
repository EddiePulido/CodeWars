function covfefe(str){
  if(!str.includes('coverage')) return str + ' covfefe'
  return str.replaceAll('coverage', 'covfefe')
}