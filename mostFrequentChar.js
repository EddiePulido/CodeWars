const mostFrequentChar = (s) => {
  const obj = [...s].reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  
  return [...s].reduce((a,c) => obj[c] > obj[a] ? c : a, s[0])
};
