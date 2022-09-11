function htmlspecialchars(formData) {
  const hash = {
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    '&' : '&amp;',
  }
  
  return [...formData].map(c => hash[c] || c).join('')
}