/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let arr = []

  while(i < m || j < n){
      if(nums1[i] && nums2[j] === undefined && i < m){
          arr.push(nums1[i++])
      } else if(nums2[j] && nums1[i] === undefined && j < n){
          arr.push(nums2[j++])
      }
      else if(nums1[i] < nums2[j]){
          arr.push(nums1[i++])
      }else{
          arr.push(nums2[j++])
      }
  }

  console.log(arr)

  for(let x = 0; x < nums1.length; x++){
      nums1[x] = arr[x]
  }

};