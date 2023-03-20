var canPlaceFlowers = function(flowerbed, n) {
  const count = flowerbed.reduce((a,c,i) => {
      if(c) return a
      const left = a.arr[i-1] || 0
      const right = a.arr[i+1] || 0
      a
      if(left + right === 0){
          a.c++
          a.arr[i] = 1
      }
      return a
  },{arr: [...flowerbed] ,c:0})

  return count.c >= n
}