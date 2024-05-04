s=readline().replace(/[^a-zA-Z]+/g,"").toLowerCase()
x=[...(new Set(s))]
m=[...s].reduce((a,c)=>(a[c]= ++a[c]||1,a),{})
for(e of x)print(e+'='+m[e])