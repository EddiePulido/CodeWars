class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def zipper_lists(head_1, head_2):
  dHead = Node(0)
  dummy = dHead
  
  curr1 = head_1
  curr2 = head_2
  
  i = 0
  
  while curr1 and curr2:
    if i % 2 == 0:
      dummy.next = curr1
      curr1 = curr1.next
    else:
      dummy.next = curr2
      curr2 = curr2.next
      
    i+=1
    dummy = dummy.next
    
  if curr1 is not None:
    dummy.next = curr1
    
  if curr2 is not None:
    dummy.next = curr2
    
  return dHead.next