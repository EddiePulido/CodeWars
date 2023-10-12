const excerpt = readline().split(' ')

const makeBox = (w) => {
    print('v'.repeat(w.length + 4))
    print('> ' + w + ' <')
    print('^'.repeat(w.length + 4))
}

let sent = []

for(let word of excerpt){
    if(word.includes('g')){
        if(sent.length) print(sent.join(' '))
        makeBox(word)
        sent = []
    }else{
        sent.push(word)
    }
}

if(sent.length) print( sent.join(' '))