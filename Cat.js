class Cat extends Animal {
  Cat(name){
    this.name = name
  }
  speak(){
    return `${this.name} meows.`
  }
}