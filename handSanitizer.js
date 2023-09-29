const gelAmount = parseInt(readline());
const guestCount = parseInt(readline());

let r = 0

for (let i = 0; i < guestCount; i++) {
    const guestName = readline();

    let s = [...guestName].reduce((a,c) => a + c.charCodeAt(), 0)

    while(s.toString().length > 1){
        s = [...(s+'')].reduce((a,c) => a + +c, 0)
    }
    s *= 5

    r += s

}

if(r > gelAmount){
    console.log('not enough')
}else{
    console.log(Math.floor((gelAmount - r) * 100 / 1000) + '%')
}
