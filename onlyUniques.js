m=[...readline()].reduce((a,c)=>(a[c]=++a[c]||1,a),{})
print(Object.keys(m).filter(e=>m[e]==1).join(''))