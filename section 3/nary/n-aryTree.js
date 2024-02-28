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
