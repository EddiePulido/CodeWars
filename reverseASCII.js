const [h,w] = readline().split(' ')
let bool = true

if(Math.floor(h/2) + 1 != w){
    print(false)
}else{
    for(let i = 1; i <= h; i++){
        if(i == w){
            print('#'.repeat(w))
            bool = false
        }else{
            if(bool){
                print('*'.repeat(i))
            }else{
                print('*'.repeat(w-(i-w)))
            }
        }
    }
}

