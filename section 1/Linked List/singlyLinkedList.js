class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // size of the list
  size() {
    return this.size;
  }

  //inserting new values to the last of the list
  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  //print the list
  print() {
    if (this.size > 0) {
      let curr = this.head;
      while (curr) {
        console.log(curr.val);
        curr = curr.next;
      }
    } else {
      console.log("list is empty");
    }
  }

  //deleting from the last of the list
  pop() {
    if (this.size === 0) {
      return undefined;
    } else {
      let curr = this.head;
      let prev = curr;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.tail = prev;
      this.size--;
      return curr.val;
    }
  }

  //remove element from the start of the list
  shift() {
    let curr = this.head;
    this.head = this.head.next;
    this.size--;
    return curr;
  }

  // inserting values to the start of the list
  unshift(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  //get elements at specific index
  get(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let i = 0;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr;
  }

  // change elements at specific position
  set(index, val) {
    let foundValue = this.get(index);
    if (foundValue) {
      foundValue.val = val;
      return true;
    }
    return false;
  }

  //insert elements at specific index
  insert(index, val) {
    const node = new Node(val);
    if (index < 0 || index > this.size) return false;
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return true;
    }

    let curr = this.head;
    let i = 0;
    while (i < index - 1) {
      curr = curr.next;
      i++;
    }

    node.next = curr.next;
    curr.next = node;
    this.size++;
    return true;
  }

  //delete elements at specific index
  remove(index) {
    if (index < 0) return undefined;
    if (index === this.size - 1) return this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.size--;
    return removed;
  }
}

const list = new LinkedList();
list.push("hello");
list.push("hi");
list.push("how");
// console.log(list.get(0));
// console.log(list.pop());
// list.shift();
// list.shift();
// list.unshift("laksjdfl");
// console.log(list.set(1, "heee"));
// list.insert(0, "sadf");
list.insert(0, "aa");
list.insert(2, "waa");
list.insert(5, "wssaa");
console.log(list.size);
list.print();
console.log(list.remove(2));
list.print();
console.log(list.size);
