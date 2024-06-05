const n = parseInt(readline());

const titles = ['Dr', 'Mr', 'Mrs', 'Ms' , 'Lord', 'Lady','Sir','BA', 'LLB' , 'MD','PhD', 'Jr,', 'Snr,' ]

for (let i = 0; i < n; i++) {
    r = readline()
    const name = r.split(' ').filter(e => !titles.includes(e))
    // console.log({r, name})
    console.log(name.map(e => e[0]).join('.')+'.')
}
