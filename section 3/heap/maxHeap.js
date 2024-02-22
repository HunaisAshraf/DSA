class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
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

  remove() {
    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    swap(this.heap, 0, this.heap.length - 1);
    let removed = this.heap.pop();
    
  }
}

const heap = new MaxBinaryHeap();
console.log(heap.insert(12));
console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(199));
heap.remove();
console.log(heap.heap);
