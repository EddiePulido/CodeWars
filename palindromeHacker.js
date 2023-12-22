const word = readline().toLowerCase()
let d = '0123456789'

if([...word].some(e => d.includes(e))){
    print('invalid')
}else{
    print([...word].reverse().join('') == word ? 'palindrome' : 'not palindrome')
}


