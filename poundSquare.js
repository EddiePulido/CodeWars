
const N = parseInt(readline());
for(let i = 0; i < N; i++){
    if(i === 0 || i === N-1){
        print('#'.repeat(N))
    }else{
        print('#' + ' '.repeat(N-2) + '#')
    }
}
