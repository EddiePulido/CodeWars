const n = parseInt(readline());
let [h,m] = readline().split(':').map(Number)


m += n

if(m >= 60){
    

    h += Math.floor(m/60)
    m = m % 60
}

if(h > 23){
    h = h % 24
}
h = h.toString()
m = m.toString()

console.log('0'.repeat(2 -h.length) + h + ':' + '0'.repeat(2 -m.length) + m)