Class Heap {
  constructor() {
    this.heap = [];
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (this.heap[parentIdx] > this.heap[idx]) {
      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }
  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }
  bubbleDown() {
    let idx = 0;
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let length = this.heap.length;
    let smallest = idx;
    while (leftIdx < length) {
      if (this.heap[leftIdx] < this.heap[smallest]) smallest = leftIdx;
      if (this.heap[rightIdx] < this.heap[smallest]) smallest = rightIdx;
      if (smallest === idx) break;
      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
    }
  }
}
//
class DinnerPlates {
  constructor(capacity) {
    this.cap = capacity;
    this.stacks = []
  }
  push(val) {
    let s = this.stacks
    if(s.length === 0){
        s.push([val])
    }else{
        for(let i = 0; i < s.length; i++){
            if(s[i].length < this.cap){
                s[i].push(val)
                return
            }
        }
        s.push([val])
    }
  }
  pop() {
    let s = this.stacks
    if(s.length === 0) return -1
    let last = s[s.length - 1]
    let popped = last.pop()
    if(last.length === 0) s.pop()
    return popped
  }
  popAtStack(index) {
    let s = this.stacks
    if(s.length === 0 || index >= s.length) return -1
    let popped = s[index].pop()
    if(s[index].length === 0) s.splice(index, 1)
    return popped
  }
}