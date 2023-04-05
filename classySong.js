class Song {
  constructor(title, artist){
    this.title = title
    this.artist = artist
    this.listeners = {}
  }
  
  howMany(arr){
    arr = [...new Set(arr.map(e => e.toLowerCase()))]
    for(let k of arr) {
      this.listeners[k] = ++this.listeners[k] || 1
    }

    return arr.reduce((a,c) => this.listeners[c] === 1 ? ++a : a, 0)
  }
}