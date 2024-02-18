function sequenceClassifier(arr){
  if(constant(arr)) return 5
  if(strictIncrease(arr)) return 1
  if(notDecrease(arr)) return 2
  if(strictDecrease(arr)) return 3
  if(notIncrease(arr)) return 4
  
  return 0
}

const strictIncrease = arr => arr.every((e,i) => i == 0 || e > arr[i-1])

const strictDecrease = arr => arr.every((e,i) => i == 0 || e < arr[i-1])

const notDecrease = arr => arr.every((e,i) => i == 0 || e >= arr[i-1])

const notIncrease = arr => arr.every((e,i) => i == 0 || e <= arr[i-1])

const constant = arr => arr.every((e,i) => i == 0 || e == arr[i-1])