/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
  let head = new ListNode(0);
  let currNode = head;
  let sum = 0;
  let p1 = l1;
  let p2 = l2;
  while (p1 != null || p2 != null) {
    if (p1 != null) {
      sum += p1.val;
      p1 = p1.next;
    }
    if (p2 != null) {
      sum += p2.val;
      p2 = p2.next;
    }
    currNode.next = new ListNode(sum % 10);
    sum = parseInt(sum / 10);
    currNode = currNode.next;
  }
  if (sum === 1) {
    currNode.next = new ListNode(1);
  }
  return head.next;
}
