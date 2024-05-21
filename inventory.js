r=readline
l=+r()
b=[]
t=[]
for(i=0;i<l;i++) {
var [c,x,g]=r().split(' ')
if(c=='ADD'){b.push(x)
t.push(+g)
}else if(c=='REMOVE'){y=b.findIndex(e=>e==x)
b=b.filter((e,i)=>i!=y)
t=t.filter((e,i)=>i!=y)}else{print(`${c} ${b.length > 1 ? b.join(', ') : b[0]} TOTALS ${t.reduce((a,c)=>a+c,0)} GOLD`)}}