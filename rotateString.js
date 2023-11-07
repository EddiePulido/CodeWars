r=[...readline()].reverse()
m={d:'p',p:'d',u:'n',n:'u',b:'q',q:'b'}
print(r.map(e=>m[e]||e).join(''))