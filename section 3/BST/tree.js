class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this.root;
    } else {
      let curr = this.root;
      while (true) {
        if (val === curr.val) return undefined;
        if (val < curr.val) {
          if (!curr.left) {
            curr.left = node;
            return this.root;
          }
          curr = curr.left;
        } else {
          if (!curr.right) {
            curr.right = node;
            return this.root;
          }
          curr = curr.right;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let curr = this.root;
    while (true) {
      if (!curr) return false;
      if (curr.val === val) return true;
      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
  }
}

const bst = new BinarySearchTree();
console.log(bst.insert(20));
console.log(bst.insert(10));
console.log(bst.insert(30));
console.log(bst.insert(12));
console.log(bst.insert(31));

console.log(bst.find(31));
