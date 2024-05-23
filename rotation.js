r=readline
n=r().split(' ')
k=+r()%n.length
print(n.slice(-k).concat(n.slice(0,-k)).join(' '))