const rev = s =>[...s].reverse().join('')

const vertMirror = str => str.split('\n').map(w => rev(w)).join('\n')

const horMirror = str => str.split('\n').reverse().join('\n')

const oper = (fct, s) => fct(s)