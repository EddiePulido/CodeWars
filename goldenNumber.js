a=[...readline()].filter(e=>+e).join('')
while(+a>9)a=[...a+''].reduce((a,c)=>a+ +c,0)
print(a)