const S = readline()

let d = '0123456789.'

if([...S].some(e => !d.includes(e)) || [...S].filter(e => e === '.').length > 1){
    console.log('STRING')
}else if(+S % 1 === 0){
    console.log('INTEGER')
}else{
    console.log('FLOAT')
}