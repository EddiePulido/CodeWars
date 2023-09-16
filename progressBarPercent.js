r=readline
n=+r()
l=+r()
let [x,y]=r().split(' ')
m=Math.floor(n*l/100)
print(x.repeat(m)+y.repeat(l-m))