const input = readline().split(':')

const ampm = input.slice(-1)[0].slice(-2)
if(input.join(':') === '12:00:00PM') print('12:00:00')
else if(ampm === 'AM') print(input.join(':').slice(0,-2))
else{
    input[0] = +input[0] + 12
    print(input.join(':').slice(0,-2))
}

