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
    this.adjacencyList[vertex1].push(vertex2);

    this.adjacencyList[vertex2].push(vertex1);
  }

  //recursive
  depthFirstSearchRecursive(node) {
    let data = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;

    function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      data.push(vertex);

      //   for (let i = 0; i < adjacencyList[vertex].length; i++) {

      //     if (!visited[adjacencyList[vertex][i]]) {

      //       dfs(adjacencyList[vertex][i]);

      //     }

      //   }

      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          return dfs(v);
        }
      });
    }
    dfs(node);
    return data;
  }

  depthFirstSearchIterative(node) {
    let stack = [];
    stack.push(node);
    let visited = {};
    let result = [];
    let vertex;

    while (stack.length) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((v) => {
          if (!visited[v]) {
            stack.push(v);
          }
        });
      }
    }
    return result;
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, " -> ", ...this.adjacencyList[vertex]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].includes(vertex2) &&
      this.adjacencyList[vertex2].includes(vertex1)
    );
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

// console.log(g.depthFirstSearchRecursive("A"));
// console.log(g.depthFirstSearchIterative("A"));

g.display();

console.log(g.hasEdge("A", "B"));
