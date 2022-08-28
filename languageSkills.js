function myLanguages(results) {
  return Object.entries(results)
              .filter(lang => lang[1] >= 60)
              .sort((a,b) => b[1] - a[1])
              .map(a => a[0])
  
}