w=readline();
v='abcdefghijklmnopqrstuvwxyz'
r=[...v].reverse().join('')
print([...w].map(e=>v[r.indexOf(e)]).join(''))