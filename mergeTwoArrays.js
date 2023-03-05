const width = parseInt(readline());
const height = parseInt(readline());
const corner = readline();
const verticalSides = readline();
const horizontalSides = readline();
const composition = readline();


for(let i = 0; i < height; i++){
    if(i == 0 || i == height - 1){
        print(corner + horizontalSides.repeat(width - 2) + corner)
    }else{
        print(verticalSides + composition.repeat(width - 2) + verticalSides)
    }
}