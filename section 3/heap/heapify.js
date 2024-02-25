class Heap {
  buildHeap(arr) {
    let length = arr.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
      this.heapify(arr, i);
    }
    return arr;
  }

  heapify(arr, i) {
    let left = Math.floor(2 * i + 1);
    let right = Math.floor(2 * i + 2);
    let largest = i;

    if (left < arr.length && arr[left] > arr[largest]) {
      largest = left;
    }

    if (arr[right] && arr[right] > arr[largest]) {
      largest = right;
    }

    if (arr[i] !== arr[largest]) {
      this.swap(arr, i, largest);
      this.heapify(arr, largest);
    }
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  heapSort(arr) {
    let sort = [];
    this.buildHeap(arr);
    while (arr.length) {
      sort.push(this.remove(arr));
    }
    return sort;
  }

  remove(arr) {
    let removed = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    let index = 0;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = left;
      if (arr[right] && arr[right] > arr[left]) {
        largest = right;
      }

      if (arr[index] < arr[largest]) {
        this.swap(arr, index, largest);
        index = largest;
      } else {
        break;
      }
    }
    return removed;
  }
}

const heap = new Heap();

// console.log("heap : ",heap.buildHeap([15, 5, 20, 1, 17, 10, 30]));

// console.log("sorted : ",heap.heapSort([15, 5, 20, 1, 17, 10, 30]));

console.log(heap.heapSort([4,3,7,5,2,6,1]))
