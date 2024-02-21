class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


// recursive method

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.val < root.val) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, val) {
    if (root === null) {
      return false;
    } else {
      if (root.val === val) {
        return true;
      } else if (val < root.val) {
        return this.search(root.left, val);
      } else {
        return this.search(root.right, val);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.val);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  min(root) {
    if (!root.left) {
      return root.val;
    } else {
     return this.min(root.left);
    }
  }
  max(root) {
    if (!root.right) {
      return root.val;
    } else {
     return this.max(root.right);
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(20);
bst.insert(10);
bst.insert(30);
bst.insert(12);
bst.insert(31);

// console.log(bst.search(30));
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
