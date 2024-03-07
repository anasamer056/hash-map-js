import Node from "./node.js";

export default class HashMap {
  data = [];

  capacity = 16;
  loadFactor = 0.75;

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode =
        (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
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
    if (this.load > this.loadFactor) {
      // Grow the capacity
    }
    const hashCode = this.hash(key); 
    
    this.insertAt(hashCode, new Node(key, value));
  }

  insertAt(index, node){
    if (index < 0 || index >= this.capacity) {
      throw new RangeError("Trying to access index out of bound");
    }

    if (!this.data[index]){
      this.data[index] = node;
      return this;
    }

    let curr = this.data[index];
    let prev;
    while (curr){
      prev = curr; 
      curr = curr.next;
    }

    prev.next = node;
  }

  entries(){
    let res = [];
    
    for (let bucket of this.data){
      if (!bucket) continue;
      
      let curr = bucket; 

      while(curr){
        res.push([curr.key, curr.value]);
        curr = curr.next;
      }
    }
    return res; 
  }

  get load (){
    this.length / this.capacity;
  }
}
