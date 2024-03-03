
const input = readline();

const v = 'aeiou'

let s = ''

for(let i = 0; i < input.length; i++){
    if(v.includes(input[i])){
        s += 'ub'

        while(v.includes(input[i])){
            s += input[i]
            i++
        }

        i--

    }else{
        s += input[i]
    }
}

print(s)