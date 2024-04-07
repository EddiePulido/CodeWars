s=readline().split(' ').map(e=>+e)
d=s[0]-s[1]
print((d<0?'Increasing ':'Decreasing ')+(s[0]+d)+' '+(s.pop()-d))