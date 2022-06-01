const getAverageAge = (list) => Math.round(list.map(p => p.age).reduce((a,i) => a + i, 0) / list.length)
