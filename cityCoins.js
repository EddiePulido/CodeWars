const n = parseInt(readline());

let s = 0

for (let i = 0; i < n; i++) {
    const [one, two, five, ten, twenty, fifty] = readline().split(' ')

    s += one * 1
    s += two * 2
    s += five * 5
    s += ten * 10
    s += twenty * 20
    s += fifty * 50

}

console.log(s)
