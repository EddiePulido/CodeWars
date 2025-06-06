class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.front = new Node(null, null, null);
    this.rear = new Node(null, null, null);
    this.size = 0;
  }

  insertFront(val) {
    let nodeIn = new Node(val, null, null);
    if (this.size == 0) {
      this.front = this.rear = nodeIn;
    } else {
      nodeIn.next = this.front;
      this.front.prev = nodeIn;
      this.front = nodeIn;
    }
    this.size++;
  }

  print() {
    let holder = this.front;
    while (holder != null) {
      console.log({holder, v:holder.value});
      holder = holder.next;
    }
  }

  printReverse() {
    let holder = this.rear;

    while (holder != null) {
      console.log(holder.value);
      holder = holder.prev;
    }
  }

  insert(val, index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.insertFront(val);
      } else {
        let i = 0;
        let holder = this.front;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }

        let newNode = new Node(val, holder.next, holder);
        if (holder.next != null) {
          holder.next.prev = newNode;
        }
        holder.next = newNode;
        this.size++;
      }
    }
  }

  deleteFront() {
    this.front = this.front.next;
    this.size--;
  }

  delete(index) {
    if (index > this.size) {
      throw "IndexOutOfRange";
    } else {
      if (index == 0) {
        this.deleteFront();
      } else {
        let i = 0;
        let holder = this.front;

        while (i < index - 1) {
          holder = holder.next;
          i++;
        }
        holder.next.next.prev = holder;
        holder.next = holder.next.next;
        this.size--;
      }
    }
  }
}

let l = new LinkedList();

l.insertFront(1);
l.insertFront(2);
l.insert(3, 1);
// l.delete(1);
// l.print();
console.log(l)