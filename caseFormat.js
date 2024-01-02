let name = readline().split(' ')
name =  name.filter((e,i) => e !== '')
const format = readline();
// print(name, format)
const map = {
    camelCase: name.map((e,i)=> i == 0 ? e.toLowerCase() : e[0].toUpperCase() + e.slice(1).toLowerCase()).join(''),
    PascalCase: name.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase()).join(''),
    snake_case: name.map(e => e.toLowerCase()).join('_')
}

console.log(map[format])