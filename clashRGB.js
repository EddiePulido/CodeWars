const code = readline();

let red = parseInt(code.slice(1,3), 16)
let green = parseInt(code.slice(3,5), 16)
let blue = parseInt(code.slice(5), 16)

if(red < 10 && green < 10 && blue < 10){
    print('black')
}else if(red >= 245 && green >= 245 && blue >= 245){
    print('white')
}else{
    if(red >= 10 && blue >= 10 && green < 10){
        print('magenta')
    }else if(red >= 10 && green >= 10 && blue < 10){
        print('yellow')
    }else if(green >= 10 && blue >= 10 && red < 10){
        print('cyan')
    }else if(red >= 10 && blue < 10 && green < 10){
        print('red')
    }else if(blue >= 10 && red < 10 && green < 10){
        print('blue')
    }else if(green >= 10 && red < 10 && blue < 10){
        print('green')
    }else{
        print('grey')
    }
}