function uniTotal (string) {
  return [...string].reduce((acc, c) => acc + c.charCodeAt(), 0)
}