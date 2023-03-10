const code = readline();
let arr = []

if(code.length % 3) print("ERROR")
else{
    for(let i = 0; i < code.length; i+=3){
        arr.push(String.fromCharCode(+(code.slice(i,i+3))))
    }
    console.log(arr.join(''));
}

