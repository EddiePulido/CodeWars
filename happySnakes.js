const n = parseInt(readline());
let happy = 0
for (let i = 0; i < n; i++) {
    const snake = readline();
    if(snake.includes('-<') || snake.includes('>-')) happy++
}

print(Math.round(happy/n * 100) + '%')
