r=readline
print([r(),r(),r()].reduce((a,c)=>c%2?a- +c:a+ +c,0))