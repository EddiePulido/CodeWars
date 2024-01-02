r=readline
n=+r()
for(i=0;i<n;i++){var [a,b]=r().split(' ')
s=+a+ +b
print(s==180?'SUPPLEMENTARY':s==90?'COMPLEMENTARY':'NEITHER')}