// implementaion using linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.head) return null;
    let temp = this.head;
    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.size--;
    return temp;
  }
}

const stack = new Stack();

console.log(stack.push(3));
console.log(stack.push(7));
console.log(stack.push(5));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
