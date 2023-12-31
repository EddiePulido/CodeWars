const direction = readline();
const x = parseInt(readline());

if(direction === 'up'){
    for(let i = 1; i <= x; i++){
        console.log(' '.repeat(x-i) + '/\\'.repeat(i))
    }
}else{
    for(let i = x; i >= 1; i--){
        console.log(' '.repeat(x-i) + '\\/'.repeat(i))
    }
}