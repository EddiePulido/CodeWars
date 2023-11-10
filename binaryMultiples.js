r=readline
m={'(':1,')':0,0:')',1:'('}
f=s=>[...s].map(e=>m[e]).join('')
c=s=>parseInt(s,2)
print(f((c(f(r()))+c(f(r()))).toString(2)))