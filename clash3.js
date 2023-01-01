/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const numOfClasses = parseInt(readline());
const totalNumOfClassmates = parseInt(readline());
const sharedClassesCount = parseInt(readline());
var inputs = readline().split(' ');
let map = {}
let arr = []
for (let i = 0; i < numOfClasses; i++) {
    const classSize = parseInt(inputs[i]);
}
for (let i = 0; i < numOfClasses; i++) {
    const classmateName = readline();
    let a = classmateName.split(' ')
    for(let j = 0; j < a.length; j++){
        if(!arr.includes(a[j])) arr.push(a[j])
        if(map[a[j]]){
            map[a[j]] += 1
        }else{
            map[a[j]] = 1
        }
    }
    
}


console.log(arr.filter(e => map[e] >= sharedClassesCount).join(' ') || 'NONE');
