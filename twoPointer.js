const X = readline();

let i = 0
let j = X.length -1 

let s = ''

while(i <= j){
    if(i === j){
        s += X[i++]
    }else{
        s+= X[i++]

        s+= X[j--]
    }
}


console.log(s);