

const n = parseInt(readline()).toString(16)

let l = 0
let d = 0

let nums = '0123456789'

for(c of n){
    if(nums.includes(c)) d++
    else l++
}

if(l === d) print('Equal')
else if(l > d) print('Letters')
else print('Digits')