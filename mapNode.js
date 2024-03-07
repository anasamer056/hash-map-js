import SetNode from "./setNode.js";

export default class MapNode extends SetNode {
    constructor(key, value, next = null){
        if (!key || !value) return new Error("Neither key nor value could be null");
        super(key, next);
        this.value = value;
    }
}