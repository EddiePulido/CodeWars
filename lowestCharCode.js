const s = readline()

let lowest =  ''
let min = Infinity

for(c of s){
    if(c != ' '){
        if(c.charCodeAt() < min){
            min = c.charCodeAt()
            lowest = c
        } 
    }
}

print([...s].filter(e => e != lowest).join(''))

