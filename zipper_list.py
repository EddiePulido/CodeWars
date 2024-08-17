class Node:
  def __init__(self, val):
    self.val = val
    self.next = None

def zipper_lists(head_1, head_2):
  dummyHead = Node(0)
  dummy = dummyHead

  while head_1 != None and head_2 != None:
    dummy.next = head_1
    dummy = dummy.next
    head_1 = head_1.next

    dummy.next = head_2
    dummy = dummy.next
    head_2 = head_2.next

  if head_1:
    dummy.next = head_1

  if head_2:
    dummy.next = head_2

  return dummyHead.next
  