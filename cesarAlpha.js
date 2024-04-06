const word = readline();

const a = 'A,B,C,D,E,F,G,H,I,K,L,M,N,O,P,Q,R,S,T,V,X,Y,Z'.split(',').join('')

if([...word].every(e => a.includes(e))){
    console.log('valid')
}else{
    console.log([...word].map(e => e == 'J' ? 'I' : 'UW'.includes(e) ? 'V' : e ).join(''))
}