s=readline()
d=s.match(/\d+/g).join('').length
l=(s.match(/[a-zA-Z]+/g)||[]).join('').length
print((Math.round((l*100/d))||0)+'%')