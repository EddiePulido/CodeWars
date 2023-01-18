function numberJoy(n) {
  let num = [...(n+'')].reduce((a,c) => a + +c, 0)
  return num * +[...(num + '')].reverse().join('') === n
}