

const N = parseInt(readline());
const T = readline().split(' ')

for(let i = 1; i <= N; i++){
    if(T.includes(i.toString())) print(`${i} is here`)
    else print (`${i} is absent`)
}