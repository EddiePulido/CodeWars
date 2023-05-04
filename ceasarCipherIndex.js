l='abcdefghijklmnopqrstuvwxyz'
u=l.toUpperCase()
c=s=>s.toLowerCase()!=s.toUpperCase()
print([...readline()].map((e,i)=>!c(e)?e:e===e.toUpperCase()?u[(u.indexOf(e)+i)%26]:l[(l.indexOf(e)+i)%26]).join(''))