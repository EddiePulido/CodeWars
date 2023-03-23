class Dictionary {
  constructor() {
    this.dic = {}
  }
  
  newEntry(key, value) {
    this.dic[key] = value
  }
  
  look(key) {
    return this.dic[key] || `Can't find entry for ${key}`
  }
}