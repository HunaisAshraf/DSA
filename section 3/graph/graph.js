class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(val) {
    if (!this.adjacencyList[val]) {
      this.adjacencyList[val] = [];
    }
  }
  addedges(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2);
    } else {
      this.addVertex(vertex1);
      this.adjacencyList[vertex1].push(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      this.addVertex(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    // for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {

    //   if (this.adjacencyList[vertex1][i] === vertex2) {
    //     this.adjacencyList[vertex1].splice(i, 1);
    //     break;
    //   }
    // }

    // for (let i = 0; i < this.adjacencyList[vertex2].length; i++) {
    //   if (this.adjacencyList[vertex2][i] === vertex1) {
    //     this.adjacencyList[vertex2].splice(i, 1);
    //     break;
    //   }
    // }
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (v) => v !== vertex2
      );
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (v) => v !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex][0]);
    }
    delete this.adjacencyList[vertex];
  }
}

const g = new Graph();

g.addVertex("liston");
g.addVertex("akil");
g.addVertex("sanooj");
g.addedges("liston", "akil");
g.addedges("liston", "sanooj");
g.addedges("sanooj", "akil");

g.removeVertex("liston");

g.removeEdge("sanooj", "akil");

console.log(g.adjacencyList);
