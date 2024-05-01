s=readline()
c=0
a=s[0]
r=''
for(e of s){if(e==a)c++
else{
r+=a+c
a=e
c=1}}
r+=a+c
print(s.length>r.length?r:s)