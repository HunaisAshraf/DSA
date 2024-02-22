class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);

    let index = this.heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.heap[parentIndex] < this.heap[index]) {
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = val;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
    return this.heap;
  }

  remove() {
    let removed = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let data = this.shiftDown();
    return removed;
  }

  shiftDown() {
    let index = 0;
    let node = this.heap[0];
    let length = this.heap.length;
    let leftIndex = Math.floor(index * 2 + 1);

    while (this.heap[leftIndex]) {
      let biggestChildIndex = leftIndex;
      let rightIndex = Math.floor(2 * index + 2);
      if (
        this.heap[rightIndex] &&
        this.heap[rightIndex] > this.heap[leftIndex]
      ) {
        biggestChildIndex = rightIndex;
      }

      if (this.heap[index] < this.heap[biggestChildIndex]) {
        let temp = this.heap[index];
        this.heap[index] = this.heap[biggestChildIndex];
        this.heap[biggestChildIndex] = temp;
        index = biggestChildIndex;
        leftIndex = Math.floor(index * 2 + 1);
      } else {
        return;
      }
    }
    return this.heap;
  }
}

const heap = new MinHeap();
console.log(heap.insert(15));
console.log(heap.insert(10));
console.log(heap.insert(56));
console.log(heap.insert(52));
console.log(heap.insert(5324));
console.log(heap.insert(-1));
console.log(heap.insert(-33));
console.log(heap.insert(1222));

let data = [];

data.push(heap.remove());
data.push(heap.remove());
data.push(heap.remove());
data.push(heap.remove());
data.push(heap.remove());
data.push(heap.remove());
data.push(heap.remove());
data.push(heap.remove());

console.log(data);
console.log(heap.heap);

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   buildHeap(arr) {
//     this.heap = arr;
//     let parentIndex = Math.floor((arr.length - 1 - 1) / 2);
//     for (let i = parentIndex; i >= 0; i--) {
//       this.shiftDown(i);
//     }
//   }

//   shiftDown(currIndex) {
//     let lastIdx = this.heap.length - 1;
//     let leftIndex = 2 * currIndex + 1;
//     let rightIndex = 2 * currIndex + 2;
//     while(leftIndex <= lastIdx)
//   }
// }
