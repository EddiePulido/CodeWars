const H = parseInt(readline());
const W = parseInt(readline());

for(let i = 0; i < H; i++){
    if(i === 0) print('#'.repeat(W))
    else if (i == H-1){
        print('#' + ' '.repeat((W-2)/2) + '#' +  ' '.repeat((W-2)/2) + '#')
    }else{
        print('#' + ' '.repeat(W-2) + '#')
    }
}
