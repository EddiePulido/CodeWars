const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const x = parseInt(readline());
    print([...x.toString(2)].reduce((a,c) => c == '1' ? a + 1 : a, 0))
}