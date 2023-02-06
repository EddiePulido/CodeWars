
const s = readline().split('').sort()

for(let i = 0; i < s.length; i++){
    if(s[i] != i+1){
        print(i+1)
        break
    }
}
