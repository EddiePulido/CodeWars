k=readline()
l=~~(k.length/2)
r=s=>[...s].reverse().join``
print(r(k.slice(0,l))+(k.length%2==1?k[l]:'')+r(k.slice(-l)))