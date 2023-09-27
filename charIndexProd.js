const S = readline()
const CHARS = readline().split(' ')

let nums = []

for(let i = 0; i < S.length; i++){
    if(CHARS.includes(S[i])) nums.push(i)
}

if(nums.length){

    console.log(nums.reduce((a,c) => a * c, 1))
}else{
    console.log('NONE')
}

