const l = readline().split(' ')

let s = 0

for(n of l){
    if(+n % 2){
        s -= +n
    }else{
        s += +n
    }
}

print(s)