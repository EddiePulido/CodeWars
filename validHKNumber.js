// TODO: Define the two functions
const isValidHKPhoneNumber = num => {
  const n = '0123456789'
  const filter = [...num].map((e => n.includes(e) ? '&' : e )).join('')
  
  return filter === '&&&& &&&&'
}

const hasValidHKPhoneNumber = num => {
  const n = '0123456789'
  const filter = [...num].map((e => n.includes(e) ? '&' : e )).join('')
  
  return filter.includes('&&&& &&&&')
} 