const n = parseInt(readline());
const yoda = readline().split(' ')

const cap = w => w[0].toUpperCase() + w.slice(1)

if(n >= yoda.length || n === 0){
    print(yoda.join(' '))
}else{
    console.log(cap(yoda.slice(n).join(' ')) + ' ' +  yoda.slice(0, n).join(' ').toLowerCase())
}

