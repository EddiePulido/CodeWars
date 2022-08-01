class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if(n > this.number){
      this.lives -= 1
      throw 'error'
    }
    if(this.lives <= 0) throw 'out of lives'
    console.log({n})
    console.log('num', this.number)
    console.log('lives', this.lives)
    if(this.number === n) return true
    this.lives -= 1
    return false
  }
}