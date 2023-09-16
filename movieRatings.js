const N = parseInt(readline());

let sum = 0
for (let i = 0; i < N; i++) {
    const rating = readline();
    let count = [...rating].reduce((a,c) => a + +(c === '*'), 0)
    sum += count
}

let avg = Math.round(sum / N)

if(avg === 10){
    console.log("Masterpiece!")
}else if(avg >= 9){
    console.log('Sensational')
}else if(avg >= 8){
    console.log('Very good')
}else if(avg >= 7){
    console.log('Good')
}else if(avg >= 6){
    console.log('Quite good')
}else if(avg >= 5){
    console.log('Average')
}else if(avg >= 4){
    console.log('So so')
}else if(avg >= 3){
    console.log('Bad')
}else if(avg >= 2){
    console.log('Very bad')
}else{
    console.log('Mistake')
}