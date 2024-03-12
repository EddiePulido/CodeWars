const tweet = readline().split(' ')
let bool = true
const c = tweet.filter(e => e.startsWith('c'))

if(c.length){
    let w = ''

    for(e of c){
        if(e.length >= w.length){
            w = e
        }
    }

    print(tweet.map(e => {
        if(e === w && bool){
            bool = false
            return 'covfefe'
        }

        return e
    }).join(' '))
}else{
    print(tweet.join(' ') + 'covfefe')
}