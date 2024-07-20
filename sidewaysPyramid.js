const zreb = parseInt(readline())

for(let i = 0; i < zreb; i++){
    console.log('*'.repeat( i + 1).split('').join(' '))
}

for(let i = 1; i < zreb; i++){
    console.log('*'.repeat(zreb - i).split('').join(' '))
}