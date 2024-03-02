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
  printWords(node = this.root, word = "", result = []) {
    if (node.endOfWord) {
      result.push(word);
    }
    for (let c in node.children) {
      this.printWords(node.children[c], word + c, result);
    }
    return result;
  }

  autoComplete(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) {
        return [];
      }
      node = node.children[c];
    }
    let list = [];
    this.printWords(node, word, list);
    return list;
  }

  
}

const trie = new Trie();
trie.insert("hello");
trie.insert("hi");
trie.insert("hunais");
trie.insert("mahin");
console.log(trie.search("hunais"));
console.log(trie.startsWith("huna"));
// console.log(trie.root.children);
console.log(trie.printWords());
console.log(trie.autoComplete("he"));
