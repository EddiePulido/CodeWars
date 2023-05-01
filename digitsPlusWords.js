s=readline()
print((s.match(/\d/g)||[0]).reduce((a,c)=>a* +c,1)+s.split(' ').length)