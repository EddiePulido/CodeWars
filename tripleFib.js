const index = parseInt(readline());

const arr = [1,1,1]

for(let i = 3; i <= index; i++){
    const [a,b,c] = arr.slice(i-3)

    arr.push(a + b + c)
}

print(arr[index])