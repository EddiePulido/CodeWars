let text = readline();
let moves = readline();

while(moves.length){
    if(moves[0] === '>'){
        text = text.slice(-1) + text.slice(0,-1)
    }else{
        text = text.slice(1) + text[0]
    }
    moves = moves.slice(1)
}

print(text)