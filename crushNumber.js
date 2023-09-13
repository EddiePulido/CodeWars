r=readline
N=+r()
T=+r()
while(T--)N=[...(N+'')].reduce((a,c)=>a*c,1)
print(N)