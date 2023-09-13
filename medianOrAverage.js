i=readline().split(' ').map(Number)
l=i.length
print(l%2?i.sort((a,b)=>a-b)[Math.floor(l/2)]:Math.ceil(i.reduce((a,c)=>a+c)/l))