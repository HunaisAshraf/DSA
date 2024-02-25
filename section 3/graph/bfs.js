class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  breadthFirst(node) {
    if (!this.adjacencyList[node]) return null;
    let visited = {};
    let result = [];
    let queue = [];
    queue.push(node);
    visited[node] = true;

    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);
      for (let v of this.adjacencyList[vertex]) {
        if (!visited[v]) {
          queue.push(v);
          visited[v] = true;
        }
      }
    }
    return result;

  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.breadthFirst("A"));
