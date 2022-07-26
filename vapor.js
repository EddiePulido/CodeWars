function vaporcode(string) {
  return [...string].filter(c => c != ' ').map(c => c.toUpperCase()).join('  ')
}