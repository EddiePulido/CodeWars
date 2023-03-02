const n = readline().split(' ')



console.log(n.map(e => Number(e) ? String.fromCharCode(+e) : e.charCodeAt()).join(' '));
