var inputs = readline().split(' ')
let redStrength = parseInt(inputs[0])
let redToughness = parseInt(inputs[1])
var inputs = readline().split(' ')
let blueStrength = parseInt(inputs[0])
let blueToughness = parseInt(inputs[1])

while(blueToughness > 0 && redToughness > 0){
    blueToughness -= redStrength
    redToughness -= blueStrength
}


if(blueToughness < 0 && redToughness < 0){
    console.log('Draw')
}else if(blueToughness <= 0){
    console.log('Red')
}else{
    console.log('Blue')
}