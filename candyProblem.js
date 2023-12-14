const candies = kids => {
  const max = Math.max(...kids)

  return kids.length > 1 ? kids.reduce((a,c) => a + (max - c),0) : -1
}