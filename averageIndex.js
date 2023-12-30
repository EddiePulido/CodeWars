r=readline
n=+r()
a=r().split` `
l=a.reduce((a,c)=>a+ +c,0)
print(a[~~(l/n)]||'ERROR')