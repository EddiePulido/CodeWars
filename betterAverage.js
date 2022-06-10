function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a,i) => a + i, 0) / classPoints.length < yourPoints
}