class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.table = [];
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let k of key) {
      total += k.charCodeAt(0);
    }
    return total % this.size;
  }

  insert(key, val) {
    let index = this.hash(key);
    const node = new Node(key, val);

    if (!this.table[index]) {
      this.table[index] = node;
    } else {
      if (this.table[index].key === key) {
        this.table[index] = node;
        return;
      }
      let curr = this.table[index];
      while (curr) {
        if (curr.key === key) {
          curr.val = val;
          curr = node;
          return;
        }
        if (!curr.next) {
          curr.next = node;
          return;
        }
        curr = curr.next;
      }
    }
  }

  search(key) {
    let index = this.hash(key);

    if (!this.table[index]) {
      return null;
    } else {
      let curr = this.table[index];

      while (curr) {
        if (curr.key === key) {
          return curr.val;
        }
        curr = curr.next;
      }
    }
  }
}

const hashTable = new HashTable(10);

hashTable.insert("name", "hunais");
hashTable.insert("name", "hari");
hashTable.insert("naem", "aaaa");
hashTable.insert("naem", "bbb");
hashTable.insert("amen", "madhav");
console.log(hashTable.search("name"));
console.log(JSON.stringify(hashTable.table));
console.log(hashTable.table);
