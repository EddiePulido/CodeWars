i=readline().toLowerCase()
a=new Array(26).fill(1)
b=true
s=''
for(c of i)a[c.charCodeAt()-97]--
for(c of a) if(c==1)b=false
if(!b)s=a.map((e,i)=>e==1?i+97:'s').filter(e=>e!='s').map(e=>String.fromCharCode(e))
print(b?'Pangram':s.join(' '))

const S = readline().toLowerCase()
const arr = new Array(26).fill(0)

for(c of S){
    arr[c.charCodeAt()-97]++
}

console.log(arr.every(Boolean))