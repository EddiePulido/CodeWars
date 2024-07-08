const n = parseInt(readline())
const a = 'abcdefghijklmnopqrstuvwxyz'
const d = '0123456789'

for (let i = 0; i < n; i++) {
    const c = readline().toLowerCase()

    if(a.includes(c)){
        console.log(a.indexOf(c).toString(2))
    }else if(d.includes(c)){
        console.log((+c).toString(2))
    }else{
        console.log('Error')
    }
}
