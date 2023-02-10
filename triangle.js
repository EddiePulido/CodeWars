//iven the length of three sides of a triangle, if it is a valid triangle output the perimeter of the triangle, otherwise output -1. Degenerate triangles are not considered valid for this clash.

const a = parseInt(readline());
const b = parseInt(readline());
const c = parseInt(readline());

if(a + b > c && a + c > b && b + c > a){
    print(a + b + c)
} else {
    print(-1)
}
