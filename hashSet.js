import SetNode from "./setNode.js";
import HashMap from "./hashMap.js";

export default class HashSet extends HashMap {

  set(key) {
    if (!key) return new Error("Key can't be null");

    const hashCode = this.hash(key);

    if (this.has(key)) this.remove(key);

    this.insertAt(hashCode, new SetNode(key));

    if (this.load > this.loadFactor) {
      this.growCapacity();
    }
  }

  growCapacity() {
    this.capacity *= 2;
    const keys = this.keys();
    this.clear();
    for (let entry of keys) {
      this.set(entry);
    }
    console.log("Capacity doubled. Current capacity: ", this.capacity);
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

  keys() {
    let res = [];

    for (let bucket of this.data) {
      if (!bucket) continue;

      let curr = bucket;

      while (curr) {
        res.push(curr.key);
        curr = curr.next;
      }
    }
    return res;
  }

  has(key) {
    if (!key || !this.data[this.hash(key)]) return false;

    let curr = this.data[this.hash(key)];

    while (curr) {
      if (curr.key === key) return true;
      curr = curr.next;
    }

    return false;
  }

  entries() {
    return new TypeError("Hash sets only have keys") 
  }

  values() {
    return new TypeError("Hash sets don't have values") 
  }

  get(key) {
    return new TypeError("Hash sets' keys don't have values") 
  }

}
