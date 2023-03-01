function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, val) => acc + val, 0); // calculate initial sum of right side
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i]; // subtract current element from right sum
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i]; // add current element to left sum
  }
  return -1; // if no index found, return -1
}