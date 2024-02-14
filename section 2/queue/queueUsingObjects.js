//implementing queue using objects

class Queue {
  constructor() {
    this.items = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(element) {
    this.items[this.last] = element;
    this.last++;
  }

  dequeue() {
    const item = this.items[this.first];
    delete this.items[this.first];
    this.first++;
    return item;
  }

  peek() {
    return this.items[this.first];
  }

  size() {
    return this.last - this.first;
  }

  isEmpty() {
    return this.last - this.first === 0;
  }

  print() {
    console.log(this.items);
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.print();
q.dequeue();
q.print();
