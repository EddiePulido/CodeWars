const sentence = readline()

let map = {
    s : 5,
    i : 1,
    a : 4,
    e : 3,
    o : 0,
    t : 7,
    '5' : 's',
    '1' : 'i',
    '4' : 'a',
    '3' : 'e',
    '0' : 'o',
    '7' : 't'
}

console.log([...sentence].map(e => e in map ? map[e] : e).join(''))