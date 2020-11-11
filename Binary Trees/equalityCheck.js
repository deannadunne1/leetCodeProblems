/*
Given two binary trees, write a function that checks if they are the same or not.

Two binary trees are considered the same if they are structurally identical and corresponding nodes have the same values.
*/

function equalityCheck(head1, head2) {
  if (head1.val !== head2.val) return false;
  else {
    head1 = head1.left;
    head2 = head2.left;
    equalityCheck(head1, head2);
    head1 = head1.right;
    head2 = head2.right;
    equalityCheck(head1, head2);
  }

  return true;
}

//Solution 3:
function equalityCheck(head1, head2) {
  if (head1 && head2) {
    tree1Vals = [...head1.val];
    tree2Vals = [...head2.val];
    head1 = head1.left;
    head2 = head2.left;
    equalityCheck(head1, head2);
    head1 = head1.right;
    head2 = head2.right;
    equalityCheck(head1, head2);
  }

  return tree1Vals === tree2Vals;
}
