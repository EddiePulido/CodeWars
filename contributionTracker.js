const n = parseInt(readline());
const f = parseInt(readline());
const e = parseInt(readline());

let errors = e * n - f * n

if(errors < 5){
    print('Contribution Accepted!')
}else if(errors < 10){
    print('Contribution Rejected!')
}else{
    print(`CODY. YOU'RE SACKED, FIRED AND KICKED OUT OF THE COMMUNITY!!!`)
}