export default class Node {
    constructor(key, value, next = null){
        if (!key || !value) return new Error("Neither key nor value could be null");
        this.key = key;
        this.value = value;
        this.next = next;
    }
}