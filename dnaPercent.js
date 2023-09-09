const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const seq = readline();
    const g = [...seq].filter(e => e === 'G' || e === 'C').length

    console.log((g/ seq.length * 100).toFixed(1))
}

