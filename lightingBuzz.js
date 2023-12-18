const MESSAGE = readline().split(' ')

print([...MESSAGE].map(e => !isNaN(e) ? e % 2 ? 'Lightning' : 'Buzz' : e).join(' '))