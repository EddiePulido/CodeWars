const n = parseInt(readline());

let sum = (n * (n+1) / 2) * 9
let sudoSum = 0

for (let i = 0; i < n; i++) {
    const row = readline();
    sudoSum += [...row].reduce((a,c) => a + +c, 0)
}

print(sum - sudoSum)
