n=+readline()
print('private bool IsPrime(int number){')
p=m=>{
if(m<2)return false
for(j=2;j<=Math.sqrt(m);j++)if(m%j==0)return false
return true}
for(i=1;i<=n;i++){
if(i==1)print('    if (number == 1) return false;')
else print(`    else if (number == ${i}) return ${p(i)};`)}
print('}')