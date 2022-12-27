function removeParentheses(s){
  return [...s].reduce((a,c) => {
    if(c === '(') a.count++
    if(a.count === 0) a.ans += c
    if(c === ')') a.count--
    return a
  }, {ans: '', count: 0}).ans
}