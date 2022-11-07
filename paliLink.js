var isPalindrome = function(head) {
    let arr = []
    let curr = head
    
    while(curr){
        arr.push(curr.val)
        curr = curr.next
    }
    
    let j = arr.length - 1
    
    for(let i = 0; i < arr.length / 2; i++)
        if(arr[i] !== arr[j--]) return false
    
    return true
}