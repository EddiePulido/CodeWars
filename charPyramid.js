const [a,b,...n] = readline().split('')
let diff = a.charCodeAt() - b.charCodeAt()

let c = a

for(let i = 1; i <= +n.join(''); i++){
   console.log(c.repeat(i))
    c = String.fromCharCode(c.charCodeAt() - diff)
}