export default class SetNode {
    constructor(key, next = null){
        if (!key) return new Error("Key could be null");
        this.key = key;
        this.next = next;
    }
}