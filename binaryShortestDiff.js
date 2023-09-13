n=+readline()
b=n.toString(2)
o=[...b].filter(Number).length
print(2**Math.abs(o-(b.length-o)))