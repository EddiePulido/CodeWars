n=readline()
s=n/[...n].reduce((a,c)=>a+ +c,0)
print(s%1?false:s)