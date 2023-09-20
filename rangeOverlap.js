r=readline
let[s,e]=r().split(' ')
let[x,y]=r().split(' ')
m=Math
print(m.min(e,y)>=m.max(s,x)?'Overlap':'Not overlap')