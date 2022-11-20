/**
 * @param {number} capacity
 */
 var DinnerPlates = function(capacity) {
  this.cap = capacity;
  this.stacks = []
};

/** 
* @param {number} val
* @return {void}
*/
DinnerPlates.prototype.push = function(val) {
  let s = this.stacks
  if(s.length === 0){
      s.push([val])
  }else{
      for(let i = 0; i < s.length; i++){
          if(s[i].length < this.cap){
              s[i].push(val)
              return undefined;
          }
      }

      s.push([val])

  }

};

/**
* @return {number}
*/
DinnerPlates.prototype.pop = function() {
  if(this.stacks.length === 0) return -1
  return this.stacks[this.stacks.length-1].pop()
};

/** 
* @param {number} index
* @return {number}
*/
DinnerPlates.prototype.popAtStack = function(index) {
  return this.stacks[index].length ? this.stacks[index].pop(): -1
};  

/** 
* Your DinnerPlates object will be instantiated and called as such:
* var obj = new DinnerPlates(capacity)
* obj.push(val)
* var param_2 = obj.pop()
* var param_3 = obj.popAtStack(index)
*/