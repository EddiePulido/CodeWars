let [a,b,c]=readline().split(' ')
s='-+*/'
m={'-':a-b,'+':+a + +b,'*':a*b,'/':Math.floor(a/b)}
a=[]
for(x of s)if(m[x]==c)a.push(x)
print(a.join(' ') || 'error')