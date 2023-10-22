let n = parseInt(readline())

if(n < 10){
    print(n % 2)
}else{

    while(n > 9){
        n = +[...(n+'')].reduce((a,c) => a + +c, 0)
    }
    
    print(n)
}