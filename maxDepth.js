const program = readline()


function maxRecursionDepth(program) {
    let maxDepth = 0;
    let depth = 0;

    for (let i = 0; i < program.length; i++) {
        if (program[i] === '[') {
            depth++;
            if (depth > maxDepth) {
                maxDepth = depth;
            }
        } else if (program[i] === ']') {
            depth--;
        }
    }

    return maxDepth;
}

console.log(maxRecursionDepth(program))