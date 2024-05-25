const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const phrase = readline().split(' ')

    if(phrase.length % 2){
        console.log(phrase[0] + ' ' + phrase[Math.floor(phrase.length / 2)] + ' ' + phrase.pop())
    }else{
        console.log(phrase.slice(0,phrase.length / 2).join(' '))
    }
}