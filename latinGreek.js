var inputs = readline().split(' ');
const origin = inputs[0];
const word = inputs[1];

const lat = {
    'k' : 'c',
    's' : 'sc'
}

const greek = {
    i : 'y',
    f : 'ph',
    k : 'ch'
}

if(origin === 'Latin'){
    console.log([...word].map((e,i) => e in lat && (e !== 's' || word[i+1] !== 'c') ? lat[e] : e).join(''))
}else{
    console.log([...word].map(e => e in greek ? greek[e] : e).join(''))
}