const N = parseInt(readline());
let p = []
let a = []
const arr = []
for (let i = 0; i < N; i++) {
    const str = readline();
    arr.push(str)
    if(str.includes('P')) p = [i,str.indexOf('P')]
    if(str.includes('A')) a = [i,str.indexOf('A')]

}

// for(row of arr){
//     console.log(row)
// }


if(p[1] < a[1]){
    console.log('RIGHT x ' + (a[1] - p[1]))
}else if(p[1] > a[1]){
    console.log('LEFT x ' + (p[1] - a[1]))
}else{
    console.log('0')
}

if(p[0] < a[0]){
    console.log('DOWN x ' + (a[0] - p[0]))
} else if(a[0] < p[0]){
    console.log('UP x ' + (p[0] - a[0]))
}else{
    console.log('0')
}