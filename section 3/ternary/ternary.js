class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.middle = null;
    this.right = null;
  }
}

class Ternary {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new TreeNode(val);

    if (!this.root) {
      this.root = node;
      return;
    }

    let curr = this.root;
    let parent;

    while (curr) {
      parent = curr;

      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        curr = curr.middle;
      }
    }

    if (val < parent.val) {
      parent.left = node;
    } else if (val > parent.val) {
      parent.right = node;
    } else {
      parent.middle = node;
    }
  }

  search(val) {
    if (!this.root) return false;
    let curr = this.root;
    while (curr) {
      if (curr.val === val) return true;

      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        curr = curr.middle;
      }
    }
    return false;
  }
}

const tree = new Ternary();

tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(44);
tree.insert(22);

console.log(tree.search());

console.log(tree.root);
