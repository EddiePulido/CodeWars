class Node<T> {
  T val;
  Node<T> next;
  
  public Node(T val) {
    this.val = val;
    this.next = null;
  }
}

class Source {
  public static <T> Node<T> reverseList(Node<T> head) {
    return reverseList(head, null);
  }
  
  public static <T> Node<T> reverseList(Node<T> curr, Node<T> prev){
    if(curr == null){
      return prev;
    }
    Node<T> next = curr.next;
    curr.next = prev;
    
    return reverseList(next, curr);
  }
  
  public static void run() {
    // this function behaves as `main()` for the 'run' command
    // you may sandbox in this function , but should not remove it
  } 
}