a=readline().split(' ').sort((a,b)=>a-b)
f=a.findIndex(e=>e!=0)
print(a[f]+a.filter((e,i)=>i!=f).join(''))