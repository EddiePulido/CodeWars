r=readline
n=+r()
s=new Set()
b=0
for(i=0;i<n;i++){
    c=r()
    if([...c].some(e=>!'-+'.includes(e)))b=1
    else [...c].map(e=>s.add(e))
}

print(b?'nonsense':s.size==2?'attracts':'repels')