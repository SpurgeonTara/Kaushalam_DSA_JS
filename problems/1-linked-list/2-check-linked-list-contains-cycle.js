class NodeList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findCircularLinkedList(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== "null") {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

let head = new NodeList(1);
let second = new NodeList(2);
let third = new NodeList(3);
let fourth = new NodeList(4);

// Link nodes
head.next = second;
second.next = third;
third.next = fourth;

// Create cycle
fourth.next = second;

console.log(findCircularLinkedList(head)); // true
