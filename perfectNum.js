n=+readline()
s=0
for(i=1;i<n;i++)if(!(n%i))s+=i
print(s==n?'perfect':'not perfect')