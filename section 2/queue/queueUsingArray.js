// queue using array

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }

  print(){
    console.log(this.items.toString())
  }
}

const q = new Queue();

q.enqueue(12)
q.enqueue(13)
q.enqueue(14)
q.print()
q.dequeue()
q.print()
