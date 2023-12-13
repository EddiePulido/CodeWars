const word = readline()

for(let i = 1; i <= word.length; i++){
    print(word.slice(i) + word.slice(0,i))
}
