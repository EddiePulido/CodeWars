m={K:10,G:9,D:8}
r=readline().split(' ').reduce((a,c)=>isNaN(c)?a+ m[c]:a+ +c,0)%10
print(r==9?'Noufi':r==0?"Karaa":r)