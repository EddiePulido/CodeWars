const string = readline();
v = 'aeiouAEIOU'
print([...string].map(c => v.includes(c) ? c + 'p' + c: c).join(''))
