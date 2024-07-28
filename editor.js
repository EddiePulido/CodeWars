r = readline
t = r()
a = r()
var [f, e] = r().split(' ')
s = []
x = []
y = 'ACCEPT'
z = 'REJECT'
for (i = 0; i < +f; i++) s.push(r())
for (j = 0; j < +e; j++) x.push(r())
if (s.includes(a)) print(y)
else if (x.includes(a)) print(z)
else print([...t].reduce((a, c) => a + c.charCodeAt(), 0) % 128 == 58 ? y : z)
