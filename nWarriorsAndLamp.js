function shortestTime(times) {
  times.sort((a, b) => a - b)

  if (times.length <= 2) return Math.max(...times)

  let totalTime = 0

  while (times.length > 3) {
    const option1 = times[0] + 2 * times[1] + times[times.length - 1]
    const option2 = 2 * times[0] + times[times.length - 2] + times[times.length - 1]
    totalTime += Math.min(option1, option2)
    times.pop()
    times.pop()
  }

  if (times.length === 3) return totalTime + times.reduce((a,c) => a + c, 0)
  
  return totalTime + Math.max(...times)
}