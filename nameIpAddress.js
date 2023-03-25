const w = readline().split('').reduce((a,c) => a + c.charCodeAt(), 0)


console.log(`${w%256}.${(w + w) % 256}.${(w*3) % 256}.${(w*4)%256}`);
