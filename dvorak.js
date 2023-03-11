const Q = readline();

let qwerty = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./"
let Dvorak = "1234567890[]',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz"

let hash = [...qwerty].reduce((a,c,i) => (a[c] = Dvorak[i], a), {})

console.log([...Q].map(e => hash[e] || ' ').join(''));
