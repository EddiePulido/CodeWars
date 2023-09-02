function solve (arr) {
  let ascending = [...arr].sort((a,b) => a - b)
  let descending = [...arr].sort((a,b) => b - a)

  if (arr.join() === ascending.join()) return "A";
  if (arr.join() === descending.join()) return "D";

  for (let i = 1; i < arr.length; i++) {
      if ([...arr.slice(i), ...arr.slice(0, i)].join() === ascending.join()) return "RA"
      if ([...arr.slice(i), ...arr.slice(0, i)].join() === descending.join()) return "RD"
  }
}