const n = parseInt(readline())
let d = '0123456789'

let hex = n.toString(16)

const nums = [...hex].reduce((a,c) => a + +(d.includes(c)), 0)
const lett = [...hex].reduce((a,c) => a + +(!d.includes(c)), 0)

if(nums === lett){
    print('Equal')
}else if(nums > lett){
    print('Digits')
}else{
    print('Letters')
}