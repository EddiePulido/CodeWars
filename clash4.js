N=+readline()
r=1
c=0
while(r<N){
if(r+4<=N)r+=4 
else if(r+3<=N)r+=3
else if(r+2<=N)r+=2
else r+=1
c++
}
print(c)