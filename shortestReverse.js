r=readline
a=Array.from({length:+r()},()=>[...r()].reverse().join(''))
for(e of a.reverse())print(e)