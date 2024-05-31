let firstName = readline();
let firstHealth = parseInt(readline());
let firstAttack = parseInt(readline());
let secondName = readline();
let secondHealth = parseInt(readline());
let secondAttack = parseInt(readline());

while(firstHealth > 0 && secondHealth > 0){
    firstHealth -= secondAttack
    secondHealth -= firstAttack
}

if(firstHealth > 0){
    console.log(firstName)
}else if(secondHealth > 0){
    console.log(secondName)
}else{
    console.log('Draw')
}
