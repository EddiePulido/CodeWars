n = parseInt(readline());
let arr = [n]

while(n != 1){
   n =  n % 2 ? n*3+1 : n / 2
   arr.push(n)
}
print(arr.join(' '))