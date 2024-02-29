class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
  appendChild(child) {
    this.children.push(child);
  }
}

class NaryTree {
  constructor(val) {
    this.root = new TreeNode(val);
  }

  preOrder() {
    let data = [];

    function dfs(node) {
      if (!node) return;
      data.push(node.val);

      for (let child of node.children) {
        dfs(child);
      }
    }
    dfs(this.root);
    return data;
  }

  postOrder() {
    let data = [];

    function dfs(node) {
      if (!node) return;

      for (let child of node.children) {
        dfs(child);
      }
      data.push(node.val);
    }
    dfs(this.root);
    return data;
  }

  bfs() {
    let data = [];
    let queue = [];
    queue.push(this.root);
    let node;

    while (queue.length) {
      node = queue.shift();

      data.push(node.val);
      for (let child of node.children) {
        queue.push(child);
      }
    }

    return data;
  }
}

const tree = new NaryTree("A");

const childB = new TreeNode("B");
const childC = new TreeNode("C");
const ChildD = new TreeNode("D");

tree.root.appendChild(childB);
tree.root.appendChild(childC);
tree.root.appendChild(ChildD);

const childE = new TreeNode("E");

childB.appendChild(childE);

console.log(tree.root);
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.bfs());
