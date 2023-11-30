const str = readline();
let sum = 0
for(let i = 0; i < str.length; i++){
    sum += str[i] ** i
    print(sum)
}