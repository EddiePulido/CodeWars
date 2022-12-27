function formatNumber(num, template) {
  if(template.split('#').length - 1 > num.toString().length) return 'Invalid phone number'
  return [...num+''].reduce((a,c) => a.replace('#', c), template)
}