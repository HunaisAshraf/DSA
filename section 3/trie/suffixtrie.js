class TreeNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class SuffixTrie {
  constructor() {
    this.root = new TreeNode();
  }

  suffix(word) {
    for (let i = 0; i < word.length; i++) {
      let curr = this.root;
      for (let j = i; j < word.length; j++) {
        let c = word[j];
        if (!curr.children[c]) {
          curr.children[c] = new TreeNode();
        }
        curr = curr.children[c];
      }
      curr.endOfWord = true;
    }
  }

  search(word) {
    let curr = this.root;
    for (let c of word) {
      if (!curr.children[c]) {
        return false;
      }
      curr = curr.children[c];
    }
    return curr.endOfWord;
  }
}

const trie = new SuffixTrie();
trie.suffix("hunais");
console.log(trie.search("nais"))

// console.log(trie.root);
