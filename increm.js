// Write n letters, beginning with a and incrementing of d letters.
// The increment works in a wrap-around way, i.e. you go back to a if you need to increment beyond z

// Compare this snippet from CodeWars/alphaPy.js:
// const n = parseInt(readline());
//
// let a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// 
// for(let i = 1; i <= n; i++){
//     print(a.slice(0,i))
// }
//
// Write n letters, beginning with a and incrementing of d letters.
// The increment works in a wrap-around way, i.e. you go back to a if you need to increment beyond z
i=readline().split(' ')
n=+i[0]
d=+i[1]
a='abcdefghijklmnopqrstuvwxyz'
k=0
s=''
for(j=0;j<n;j++){s+=a[k%26]
k+=d}
print(s)