const dir = readline().split('/')

let spaces = 0

for(let i = 0; i < dir.length; i++){
    if(i === 0){
        print(dir[i])
    }else{
        print(' '.repeat(spaces) + '|--' + dir[i])
        spaces += 3
    }
}