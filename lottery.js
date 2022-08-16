function bingo(ticket, win){
  let minis = ticket.reduce((acc, arr) => {
    if(arr[0].split('').some(e => e.charCodeAt() === arr[1])){
      return acc + 1
    }else{
      return acc + 0
    }
  }, 0)
  
  return minis >= win ? 'Winner!' : 'Loser!'
}