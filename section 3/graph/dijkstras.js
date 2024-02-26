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

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.heap.push(node);
    if (this.heap.length === 1) return;
    this.heapifyUp();
  }

  heapifyUp() {
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
  }

  dequeue() {
    let removed = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return removed;
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smallest;

      if (left < this.heap.length) {
        smallest = left;
      }

      if (
        right < this.heap.length &&
        this.heap[right].priority < this.heap[smallest].priority
      ) {
        smallest = right;
      }

      if (
        smallest < this.heap.length &&
        this.heap[index].priority > this.heap[smallest].priority
      ) {
        this.swap(this.heap, index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2];
    }

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Djikstra(start, end) {
    const nodes = new PriorityQueue();
    let distances = {};
    let previous = {};

    for (let vertex in this.adjacencyList) {
      if (vertex === start || vertex === end) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // while (nodes.heap.length) {}
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 3);
g.addEdge("A", "C", 5);
g.addEdge("B", "D", 2);
g.addEdge("C", "E", 1);
g.addEdge("D", "E", 8);
g.addEdge("D", "F", 3);
g.addEdge("E", "F", 5);

// console.log(g.adjacencyList);
g.Djikstra("A", "F");
