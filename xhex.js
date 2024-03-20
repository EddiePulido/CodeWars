const s = readline()

print('x'+[...s].map(e => e.charCodeAt().toString(16)).join('x'))