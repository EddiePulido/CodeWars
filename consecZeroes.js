const N = readline();

let curr = 0
let longest = 0

for(c of N){
    if(c == 0){
        curr++
        longest = Math.max(curr,longest)
    
    }else{
        curr = 0
    }
}

console.log(longest);