const n = readline()

const bool = [...n].reduce((a,c,i) => a + c ** (i+1), 0) == n

if(bool){
    print(`Yes, ${n} is a Disarium Number.`)
}else{
    print(`No, ${n} is not a Disarium Number.`)
}
