# HashMap and HashSet Implementation in JavaScript

This repository contains implementations of HashMap and HashSet data structures in JavaScript.

## HashMap

A HashMap, also known as Hash Table, is a data structure that stores key-value pairs. It uses a hash function to compute an index into an array where the desired value can be found. It offers fast insertion, deletion, and lookup of elements.

### Usage

You can use the `HashMap` implementation in your JavaScript projects as follows:

1. Clone or download this repository to your local machine.

2. Include `HashMap.js` file in your project where you need to use a HashMap.

3. Instantiate a new `HashMap` object:

```javascript
import HashMap from './HashMap.js';

const hashMap = new HashMap();
```

4. Start using the HashMap by setting key-value pairs, getting values, checking for key existence, or removing elements:

```javascript
hashMap.set('key', 'value');
console.log(hashMap.get('key')); // Output: 'value'

console.log(hashMap.has('key')); // Output: true

hashMap.remove('key');
console.log(hashMap.has('key')); // Output: false
```

Refer to the [API section](#api) for detailed documentation of the `HashMap` class.

## HashSet

A HashSet is a set data structure that uses a HashMap internally to store unique elements. It only stores keys without associated values.

### Usage

You can use the `HashSet` implementation in your JavaScript projects as follows:

1. Clone or download this repository to your local machine.

2. Include `HashSet.js` file in your project where you need to use a HashSet.

3. Instantiate a new `HashSet` object:

```javascript
import HashSet from './HashSet.js';

const hashSet = new HashSet();
```

4. Start using the HashSet by adding elements, checking for element existence, or removing elements:

```javascript
hashSet.add('element');
console.log(hashSet.has('element')); // Output: true

hashSet.delete('element');
console.log(hashSet.has('element')); // Output: false
```

Refer to the [API section](#api) for detailed documentation of the `HashSet` class.

## API

### `HashMap` class

#### Constructor

- `HashMap(capacity: number, loadFactor: number)`: Constructs a new HashMap instance. Optionally, you can specify the initial capacity and load factor. Default values are `16` for capacity and `0.75` for the load factor.

#### Methods

- `set(key: string, value: any)`: Sets the value associated with the specified key.
- `get(key: string): any`: Returns the value associated with the specified key, or `null` if the key doesn't exist.
- `has(key: string): boolean`: Returns `true` if the HashMap contains the specified key, otherwise `false`.
- `remove(key: string): boolean`: Removes the key-value pair associated with the specified key.
- `clear()`: Removes all key-value pairs from the HashMap.
- `keys(): Array<string>`: Returns an array containing all keys in the HashMap.
- `values(): Array<any>`: Returns an array containing all values in the HashMap.
- `length: number`: Returns the number of key-value pairs stored in the HashMap.
- `load: number`: Returns the current load factor of the HashMap.

### `HashSet` class

#### Constructor

- `HashSet(capacity: number, loadFactor: number)`: Constructs a new HashSet instance. Inherits from `HashMap`. 

#### Methods

- `add(key: string)`: Adds the specified key to the HashSet.
- `has(key: string): boolean`: Returns `true` if the HashSet contains the specified key, otherwise `false`.
- `delete(key: string): boolean`: Removes the specified key from the HashSet.
- `clear()`: Removes all keys from the HashSet.
- `keys(): Array<string>`: Returns an array containing all keys in the HashSet.
- `length: number`: Returns the number of keys stored in the HashSet.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
