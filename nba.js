function pointsPer48(ppg, mpg) {
  return ppg === 0 ? 0 : Number((ppg * 48 / mpg).toFixed(1))
}