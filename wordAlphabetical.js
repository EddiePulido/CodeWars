const word = readline()


let s = ''

let result = word[0]; 
for (let i = 1; i < word.length; i++) {

    if (word[i] >= result[result.length - 1]) {
        result += word[i]; 
    }
}
console.log(result)