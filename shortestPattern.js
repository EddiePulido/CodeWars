var [a,b,c]=readline().split(' ')
for(i=0;i<5;i++)print(i==0||i==4?a+a+a+a+a:i==2?a+b+c+b+a:a+b+b+b+a)