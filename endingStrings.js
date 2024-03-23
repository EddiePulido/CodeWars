const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    const row = readline();

    let c = 0

    while(row[c] == '#'){
        c++
    }

    const end = c ? '='.repeat(c) + '=' : ''

    print(end + row.slice(c) + end)
}

