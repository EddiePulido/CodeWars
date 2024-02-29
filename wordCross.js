var [a,b]=readline().toUpperCase().split(' ')
if(b.length >= a.length) [a,b] = [b,a]
f=[...a].findIndex(e=>b.includes(e))
j=b.indexOf(a[f])
if(f==-1)print('NO COMMON CHARACTER')
else{
    for(i=0;i<b.length;i++){
        if(i==j)print([...a].join(' '))
        else print(' '.repeat(f*2)+b[i])
    }
}