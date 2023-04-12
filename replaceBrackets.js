let str = readline();
let regex = /<(.*?)>/g;
let regex2 = /<(.*?)>/;
let matches = str.match(regex);

let results = matches.map(match => match.slice(1,-1) );


results = results.map(e =>  e.split(' ').map(c => c[0]).join(''))

let i = 0

while(i < results.length){
    str = str.replace(regex2, results[i++] )
}

print(str)