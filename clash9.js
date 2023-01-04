const s = readline();
let map = {'+':1,'-':-1}

print([...s].reduce((a,c) => a + map[c], 0 ))
