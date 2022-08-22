class Block{

  constructor(data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }
  
  getWidth(){
    return this.width
  }
  
  getLength(){
    return this.length
  }
  
  getHeight(){
    return this.height
  }
  
  getVolume(){
    return this.length * this.width * this.height
  }
  
  getSurfaceArea(){
    let w = this.width
    let l = this.length
    let h = this.height
    return 2 *(w * l + l * h + h * w)
  }
  
}