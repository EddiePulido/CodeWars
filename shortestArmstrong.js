n=+readline()
for(i=1;i<n;i++){c=[...(i+'')].reduce((a,c,_,s)=>a+ c**s.length,0)
if(c==i)print(c)}