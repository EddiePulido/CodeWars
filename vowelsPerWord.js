const sentence = readline().toLowerCase()

let words = sentence.split(' ')

let v = 'aeiou'

let result = []

for(word of words){
    result.push([...word].reduce((a,c) => v.includes(c) ? a + 1 : a, 0))
}

print(result.join(' '))