const N = parseInt(readline());

let max = 0
let result = ''
for (let i = 0; i < N; i++) {
    const [name, club, team, goals, ass, nTro, cTro] = readline().split('-')

    let score = +goals * 2 + +ass + +nTro * 20 + +cTro * 10

    if(score > max){
        max = score
        result = `${name} ${club} ${team} ${score}`
    }
}

console.log(result)