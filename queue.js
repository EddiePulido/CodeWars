function Node (val) {
  this.val = val
  this.next = null
}

function Queue () {
  this.head = null
  this.tail = null
  
  this.add = function(val){
    const node = new Node(val)
    
    if(!this.head){
      this.head = node
      this.tail = node
    }else{
      this.tail.next = node
      this.tail = node
    }
  }
  
  this.remove = function() {
    if(this.head){
      const node = this.head
      this.head = this.head.next
      
      return node.val
    } 

    return null
  }

}

const queue = new Queue

queue.add(5)
queue.add(6)
queue.add(7)

console.log(queue.remove())
console.log(queue.remove())