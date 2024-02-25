class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  heapifyUp(val) {
    this.heap.push(val);
    let index = this.heap.length - 1;
    let parentindex = Math.floor((index - 1) / 2);
    while (val > this.heap[parentindex]) {
      this.heap[index] = this.heap[parentindex];
      this.heap[parentindex] = val;
      index = parentindex;
      parentindex = Math.floor((index - 1) / 2);
    }

    return this.heap;
  }

  heapifyDown() {
    let length = this.heap.length;
    let removed = this.heap[0];
    this.heap[0] = this.heap[length - 1];
    this.heap.pop();
    let index = 0;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let largest;

      if (left < length) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (this.heap[index] < this.heap[largest]) {
        this.swap(index, largest);
        index = largest;
      } else {
        break;
      }
    }

    return removed;
  }
  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

const heap = new MaxBinaryHeap();
heap.heapifyUp(12)
heap.heapifyUp(41)
heap.heapifyUp(39)
heap.heapifyUp(199)
console.log(heap.heap)


// let data = [];
// data.push(heap.heapifyDown());
// data.push(heap.heapifyDown());
// data.push(heap.heapifyDown());
// // heap.heapifyDown();
// // heap.heapifyDown();

// console.log("heapdown " ,data)
// console.log(heap.heap);


// let stack = []