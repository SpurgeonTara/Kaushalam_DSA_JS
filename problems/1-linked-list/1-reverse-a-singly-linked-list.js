class NodeList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

let head = new NodeList(1);
head.next = new NodeList(2);
head.next.next = new NodeList(3);
head.next.next.next = new NodeList(4);

let temp = reverseLinkedList(head);
while (temp !== null) {
  console.log(temp.value);
  temp = temp.next;
}
