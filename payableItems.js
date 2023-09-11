const orderedItems = readline().split(' ')
const receivedItems = readline().split(' ')
const invoicedItems = readline().split(' ')

let arr = []

for(i of orderedItems){
    if(receivedItems.includes(i) && invoicedItems.includes(i)) arr.push(i)
}

console.log(arr.join(' '))