const s = readline()

let w = ''



for(let i = 0; i < s.length; i++){
    if(s[i] == s[i+1]){
        i++
    }
    
    w += s[i]
    
}

console.log(w)