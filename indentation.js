const size = parseInt(readline());
for (let i = 0; i < size; i++) {
    const ind = parseInt(readline());
    console.log(' '.repeat(ind) + '*'.repeat(i+1))
}
