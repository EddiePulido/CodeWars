function inviteMoreWomen(L) {
  const men = L.reduce((a,c) => a + +(c === 1), 0)
  const women = L.reduce((a,c) => a +(c === -1), 0)

  return men > women
}