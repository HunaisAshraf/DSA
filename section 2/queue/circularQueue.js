class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.first = -1;
    this.last = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.last = (this.last + 1) % this.capacity;
      this.items[this.last] = element;
      this.currentLength++;
      if (this.first === -1) {
        this.first = this.last;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    let removed = this.items[this.first];
    this.items[this.first] = null;
    this.first++;
    this.currentLength--;
    if (this.isEmpty()) {
      this.first = -1;
      this.last = -1;
    }
    return removed;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.first];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.first; i !== this.last; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const q = new CircularQueue(5);

console.log(q.isEmpty());
q.enqueue(2);
q.enqueue(55);
q.enqueue(29);
q.enqueue(79);
q.enqueue(9);
q.dequeue()
console.log(q.currentLength);
q.print();
console.log(q.peek());
