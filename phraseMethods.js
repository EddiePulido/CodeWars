let phrase = readline()
const method = parseInt(readline());

phrase = phrase.split(' ').join('')

const isChar = c => c.toLowerCase() !== c.toUpperCase()

if(method === 1) {
    phrase = phrase.toLowerCase()
    print(phrase.split('').join(' '))
}

if(method === 2) {
    phrase = phrase.toUpperCase()
    print(phrase.split('').join(' '))
}

if(method === 3){
    let up = true
    phrase = phrase.split('').map((c,i) =>{
        if(isChar(c)){
            up = !up
            return up ? c.toUpperCase() : c.toLowerCase()
        }
        return c
    })

    print(phrase.join(''))
}