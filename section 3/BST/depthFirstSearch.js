class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //   insert(val) {
  //     const node = new Node(val);
  //     if (!this.root) {
  //       this.root = node;
  //       return this.root;
  //     }
  //     let curr = this.root;
  //     while (true) {
  //       if (val === curr.val) return undefined;
  //       if (val < curr.val) {
  //         if (!curr.left) {
  //           curr.left = node;
  //           return this.root;
  //         }
  //         curr = curr.left;
  //       } else {
  //         if (!curr.right) {
  //           curr.right = node;
  //           return this.root;
  //         }
  //         curr = curr.right;
  //       }
  //     }
  //   }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
    return this.root;
  }

  insertNode(root, node) {
    if (node.val < root.val) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  preOrder() {
    let data = [];
    let curr = this.root;

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(curr);

    return data;
  }

  postOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  inOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }
}

const bst = new BST();
console.log(bst.insert(10));
console.log(bst.insert(11));
console.log(bst.insert(9));
bst.insert(7);
bst.insert(6);
bst.insert(15);
bst.insert(8);
bst.insert(16);
bst.insert(13);

// console.log(bst.dfs());

console.log(bst.preOrder());
console.log(bst.postOrder());
console.log(bst.inOrder());
