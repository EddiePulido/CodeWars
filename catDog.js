var humanYearsCatYearsDogYears = function(h) {
  
  const c = h === 1 ? 15 : h === 2 ? 24 : 24 + (h-2) * 4
  const d = h === 1 ? 15 : h === 2 ? 24 : 24 + (h-2) * 5
  return [h,c,d];
}
