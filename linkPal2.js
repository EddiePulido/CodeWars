/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  let lHead = head
  let slow = head
  let fast = head
  let result = true

  while(fast?.next){
      tail = slow
      fast = fast.next?.next;
      slow = slow.next
  } 

  let rHead = reverseList(slow)

  while(rHead){
      if(lHead.val != rHead.val) result = false
      lHead = lHead.next
      rHead = rHead.next
  }

  return result
};

var reverseList = function(head) {
  let curr = head
  let prev = null
  
  while(curr != null){
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
  }
  
  return prev
};