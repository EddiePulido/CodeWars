/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const F = parseInt(readline())
const N = parseInt(readline())

arr = []
for (let i = 0; i < N; i++) {
    const monster = readline()
    if(monster !== 'TROLL') arr.push(monster)
}


if(F >= arr.length * 2) print('Lot of food')
else if(F >= arr.length) print('Just enough food')
else print('Not enough food')
