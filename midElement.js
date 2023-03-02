/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const s = readline().split(' ')
// print({s})

if(s.length % 2 == 0){
    print(s.slice(s.length/2 -1, s.length/2 +1).join(''))
}else{
    print(s[Math.floor(s.length/2)])
}

