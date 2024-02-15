class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    // this.table[index] = value;
    if (!this.table[index]) {
      this.table[index] = [[key, value]];
    } else {
      const item = this.table[index].find((item) => item[0] === key);
      if (item) {
        item[1] = value;
      } else {
        this.table[index].push([key, value]);
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    return this.table[index][0][1];
    return this.table[index][0][1];
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "hunais");
table.set("name", "alkfj");
table.set("name", "aaaaa");
table.set("age", 23);

console.log(table.get("name"));

// table.print();
