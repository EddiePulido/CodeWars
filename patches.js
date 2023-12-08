r=readline
f=l=>l.split('.').map(Number)
let [m,s,p]=f(r())
let [x,y,z]=f(r())
print(x>m?"major":x==m&y>s?"minor":x==m&y==s&&z>p?"patch":"old")