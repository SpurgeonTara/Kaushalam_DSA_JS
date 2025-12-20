class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = slow.next.next;
  }

  return slow;
}

let head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);
head.next.next.next.next = new ListNode(50);

const middle = findMiddleNode(head);
console.log(middle.value); // 30
