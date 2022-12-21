const subtractProductAndSum = (n, s = n.toString()) => {
  const prod = [...s].reduce((a,c) => a * +c, 1)
  const sum = [...s].reduce((a,c) => a + +c, 0)

  return prod - sum
};