function Node(val) {
  this.val = val
  this.next = null
  this.prev = null
}

function Stack() {
  this.head = null
  this.tail = null
  this.length = 0
  
  this.add = function(val) {
    const node = new Node(val)
    
    if(!this.length){
      this.head = node
      this.tail = node
    }else{
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    
    this.length++
  }
  
  this.pop = function() {
    if(!this.length) return null
    
    const node = this.tail
    
     if(this.length === 1){
      this.head = null
      this.tail = null
    }else{
      this.tail = this.tail.prev
      this.tail.next = null
    }
    
    this.length--
    
    return node.val
  }
}

const stack = new Stack

stack.add(5)
stack.add(4)
stack.add(7)
stack.add(8)


console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())cw