const n = parseInt(readline());
const o = readline()



for (let i = 0; i < n; i++) {
    const s = readline();

    print([...s].sort().join('') === [...o].sort().join('') ? 'anagram' : 'not an anagram')
}

