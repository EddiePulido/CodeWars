const str = readline()
let max = 0
let currStreak = 0
let curr = str[0]

for(c of str){
    if(c === curr){
        currStreak++
        max = Math.max(currStreak, max)
    }else{
        curr = c
        currStreak = 1
    }
}

print(max)