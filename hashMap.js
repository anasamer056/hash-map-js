import Node from "./node.js";

export default class HashMap {
  data = [];

  capacity = 16;
  loadFactor = 0.75;

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  get length() {
    let count = 0;

    for (let bucket of this.data) {
      if (!bucket) continue;
      let curr = bucket;

      while (curr) {
        curr = curr.next;
        count++;
      }
    }
    return count;
  }

  set(key, value) {
    if (!key) return new Error("Key can't be null");

    const hashCode = this.hash(key);

    if (this.has(key)) this.remove(key);

    this.insertAt(hashCode, new Node(key, value));

    if (this.load > this.loadFactor) {
      this.growCapacity()
    }
  }

  growCapacity(){
    this.capacity *= 2;
    const entries = this.entries();
    this.clear();
    for (let entry of entries){
      this.set(entry[0], entry[1]);
    }
    console.log("Capacity doubled. Current capacity: ", this.capacity)
  }

  insertAt(index, node) {
    if (index < 0 || index >= this.capacity) {
      throw new RangeError("Trying to access index out of bound");
    }

    if (!this.data[index]) {
      this.data[index] = node;
      return this;
    }

    let curr = this.data[index];
    let prev;
    while (curr) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = node;
  }

  entries() {
    let res = [];

    for (let bucket of this.data) {
      if (!bucket) continue;

      let curr = bucket;

      while (curr) {
        res.push([curr.key, curr.value]);
        curr = curr.next;
      }
    }
    return res;
  }

  keys(){
    const entries = this.entries();
    return entries.map(node=>node[0]);
  }

  values(){
    const entries = this.entries();
    return entries.map(node=>node[1]);
  }

  get(key) {
    if (!key || !this.data[this.hash(key)]) return null;

    let curr = this.data[this.hash(key)];

    while (curr) {
      if (curr.key === key) return curr.value;
      curr = curr.next;
    }

    return null;
  }

  has(key) {
    if (this.get(key) !== null) return true;
    return false;
  }

  remove(key) {
    if (!key) return false;

    const hashCode = this.hash(key);
    if (!this.data[hashCode]) return false;

    let index = 0;
    let curr = this.data[hashCode];
    let prev = curr;

    while (curr) {
      if (curr.key === key) {
        if (!index) {
          this.data[hashCode] = curr.next;
        } else {
          prev.next = curr.next;
        }
        return true;
      }
      index++;
      prev = curr;
      curr = curr.next;
    }

    return false
  }

  clear() {
    this.data = [];
  }

  get load() {
    return this.length / this.capacity;
  }
}
