s=readline().replace(/[^a-zA-Z]/g,'')
m=[...s].reduce((a,c)=>(c.toUpperCase()==c?a.u++:a.l++,a),{u:0,l:0})
print(m.u**m.l)