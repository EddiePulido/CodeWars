r=readline
N=+r()
a=[]
b=[]
for(i=0;i<N;i++)i%2?b.push(r()):a.push(r())
for(w of a.concat(b))print(w)