const sentence = readline().split(' ').join('').toLowerCase()

const map = [...sentence].reduce((a,c)=>(a[c] = ++a[c] || 1, a), {})

let count = 0
for(k in map){
    if(map[k] > 1){
        count += Math.floor(map[k] / 2)
    }
}

console.log(count)