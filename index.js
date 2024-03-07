import HashMap from "./hashMap.js";

const hashMap = new HashMap();
hashMap.set("amber", "amer");
hashMap.set("amberc", 7)
hashMap.set("amberv", 4)
hashMap.set("ambervv", 7)

hashMap.set("ambervvv", 8)

console.log(hashMap.remove("amberv"));
console.log(hashMap.entries())
