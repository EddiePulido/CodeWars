const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const p = [...inputs[0].toLowerCase()].sort().join('')
    const q = [...inputs[1].toLowerCase()].sort().join('')
    // print({p,q})
    print(p === q)
    
}
