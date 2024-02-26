class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;
    for (let c of word) {
      if (!curr.children[c]) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }
    curr.endOfWord = true;
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

  startsWith(word) {
    let curr = this.root;

    for (let c of word) {
      if (!curr.children[c]) {
        return false;
      }
      curr = curr.children[c];
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("hello");
console.log(trie.search("hunai"));
console.log(trie.startsWith("hunai"));
console.log(trie.root.children);
