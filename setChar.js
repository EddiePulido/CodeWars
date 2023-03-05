

const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const s = readline();

    print([...new Set(s)].join(''))
}

