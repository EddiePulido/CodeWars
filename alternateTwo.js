s=readline()
e=[...new Set(s)]
m={}
m[e[0]]=e[1]
m[e[1]]=e[0]
print([...s].map(x=>m[x]).join(''))