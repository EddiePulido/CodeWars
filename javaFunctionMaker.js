const n = parseInt(readline());
if(n <= 0){
    console.log(`Can't create function`)
}else{
    console.log(`private bool IsEven(int number){`)
    for(let i = 1; i <= n; i++){
        if(i === 1){
            console.log(`    if (number == 1) return false;`)
        }else{
            console.log(`    else if (number == ${i}) return ${i % 2 == 0};`)
        }
    }
    console.log('}')
}

