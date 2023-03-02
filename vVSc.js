const string = readline().toLowerCase()

let v = 'aeiouy'

vowels = [...string].filter(e => v.includes(e)).length;
c = [...string].filter(e => !v.includes(e)).length;



c > vowels ? print('consonants') : print('vowels')