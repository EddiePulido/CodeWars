n=readline()
while(n.length > 1)n=[...n].reduce((a,c)=>a+ +c,0) + ''
print(n)