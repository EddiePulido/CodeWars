r=readline
n=+r()
y="Rat Ox Tiger Rabbit Dragon Snake Horse Goat Monkey Rooster Dog Pig".split(' ')
for(i=0;i<n;i++)console.log(y[(+r()%1900)%12])
