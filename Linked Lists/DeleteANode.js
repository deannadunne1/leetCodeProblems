/*
Write a function to delete a node in a singly-linked list.

You will NOT be given access to the head of the list, instead you’ll be given access to the node to be deleted directly.

The node you must delete will NOT be a tail node in the linked list.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

*/

//What should I be returning?

function deleteNode(node) {
  //change node.val to node.next.val for all nodes and delete last
  if (node.val) {
    node.val = node.next.val;
    node.next = node.next.next;
    node = node.next;
    deleteNode(node);
  } else {
    //is there a way to clean up by deleting the last node or do we just leave it with undefined values?
    return;
  }
}

//Time complexity: O(n)
//Space complexity: O(1)
