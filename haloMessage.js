r=readline
n=+r()
s=''
for(i=0;i<n;i++)s+=String.fromCharCode(parseInt(r(),16))
print(s.length%2?[...s].reverse().join(''):s)