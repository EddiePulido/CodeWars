c=(s,l=s.toUpperCase())=>s.toLowerCase()!=l&&s==l
print([...readline()].filter(e=>c(e)).join(''))