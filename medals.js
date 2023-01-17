let G = parseInt(readline());
let S = parseInt(readline());
let B = parseInt(readline());

// console.log({G,S,B})

if(B > 100){
    S += parseInt(B / 100)
    B = B % 100
}

if(S > 100){
    G += parseInt(S / 100)
    S = S % 100
}

console.log(`${G}G ${S}S ${B}B`)