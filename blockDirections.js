/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const R = readline();

let blocks = 0

for(c of R){
    if(c === '-'){
        blocks++
    }else{
        if(blocks) print(`Go ${blocks} blocks Forward`)
        print(c === 'R' ? 'Turn Right' : 'Turn Left')
        blocks = 0
    }
}

console.log('You ve reached your destination');
