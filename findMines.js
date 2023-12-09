var inputs = readline().split(' ');
const n = parseInt(inputs[0]);
const m = parseInt(inputs[1]);

let count = 0
for (let i = 0; i < n; i++) {
    const row = readline();
    count += [...row].reduce((a,c) => a + +(c == 'M'), 0)
}
print(count)