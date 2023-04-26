const S = readline();

const filt = s => [...s].filter((e,i) => e !== s[i-1]).join('')


print(S.split(' ').filter(word => word.toLowerCase() !== filt(word.toLowerCase())).length)