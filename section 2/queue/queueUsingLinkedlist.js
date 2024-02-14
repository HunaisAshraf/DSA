// implemetaion using queue

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enque(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return node;
  }

  deque() {
    if (!this.head) {
      return null;
    }
    let removed = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return removed.val;
  }
}

const q = new Queue();
console.log(q.enque("hello"));
q.enque("hi");
q.enque("33");
// console.log(q.head)
console.log(q.deque())
console.log(q.deque())
console.log(q.deque())
console.log(q.deque())
console.log(q.deque())
