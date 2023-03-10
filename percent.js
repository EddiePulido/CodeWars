const chunks = parseInt(readline());
const size = parseInt(readline());

let percent = Math.round(chunks / size * 100)

console.log('#'.repeat(chunks) + '.'.repeat(size-chunks) + ' ' + percent + '%');
