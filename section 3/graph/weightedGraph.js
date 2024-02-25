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
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  shortestPath(stat, end) {
    let distance = {};
    for (let key in this.adjacencyList) {
      distance[key] = Infinity;
    }
    return distance;
  }
}

const g = new WeightedGraph();
g.addVertex("A");
g.addEdge("A", "B", 2);
g.addEdge("A", "c", 2);

console.log(g.shortestPath("A", "B"));
