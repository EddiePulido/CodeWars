/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const u = readline().toLowerCase()

const chars = s => {
    return s.length >= 3
}

const maxChars = s => s.length <= 20

const ad = 'abcdefghijklmnopqrstuvwxyz0123456789'

const alphaNum = s => {
    return [...s].every(e => ad.includes(e))
}

const valid = s => {
    return chars(s) && maxChars(s) && alphaNum(s)
}

valid(u) ? print('VALID') : print('INVALID')

