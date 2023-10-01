m=readline().split(' ')
print(m.map(e=>{a=new Array(7).fill(0)
for(c of e) a[6- +c]++
return String.fromCharCode(parseInt(a.join(''), 2))}).join(''))