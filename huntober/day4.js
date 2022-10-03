const reverse = (str) => {
  return str.split('').reverse().join('')
}
let str = reverse("   The white space at the beginning of this string doesn't match the whitespace at the end. ")
console.log({str})