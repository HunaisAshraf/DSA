class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(heap, i, j) {
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.heap.push(node);
    if (this.heap.length > 1) {
      this.shiftUp();
    }
    return this.heap;
  }

  shiftUp() {
    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.heap[parentIndex].priority > this.heap[index].priority
    ) {
      this.swap(this.heap, parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.heap;
  }

  dequeue() {
    let removed = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    if (this.heap.length > 0) {
      this.shiftDown();
    }
    return removed;
  }

  shiftDown() {
    let index = 0;
    let leftIndex = Math.floor(index * 2 + 1);
    let length = this.heap.length;

    while (leftIndex < length) {
      let smallest = leftIndex;
      let rightIndex = Math.floor(2 * index + 2);
      if (
        this.heap[rightIndex] &&
        this.heap[rightIndex].priority < this.heap[smallest].priority
      ) {
        smallest = rightIndex;
      }

      if (this.heap[smallest].priority < this.heap[index].priority) {
        let temp = this.heap[smallest];
        this.heap[smallest] = this.heap[index];
        this.heap[index] = temp;

        index = smallest;
        leftIndex = Math.floor(index * 2 + 1);
      } else {
        return;
      }
    }
  }
}

const q = new PriorityQueue();

q.enqueue(10, 100);
q.enqueue(11, 44);
q.enqueue(1, 12);
q.enqueue(2, 15);
q.enqueue(3, 1);
// q.enqueue(130, 2);

console.log(q.heap)

let data = []
data.push(q.dequeue())
data.push(q.dequeue())
data.push(q.dequeue())
data.push(q.dequeue())
data.push(q.dequeue())
data.push(q.dequeue())


console.log(data)
