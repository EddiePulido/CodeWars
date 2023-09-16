const s = readline().toLowerCase()
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const c = readline().toLowerCase()
    const count = [...s].filter(e => e === c).length

    console.log((Math.ceil(count * 100 / s.length) || '0') + '%')
}
