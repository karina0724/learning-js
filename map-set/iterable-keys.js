/* We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.

But that doesn’t work:

let map = new Map();

map.set("name", "John");

let keys = map.keys();

-! Error: keys.push is not a function
keys.push("more");
Why? How can we fix the code to make keys.push work?*/

/*
Answer
- It doesn't work because it is not an array instead is a object.
- I can solve it converting the Object into Array
*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
/*
Another solution -> let keys = [...map.keys()]; using rest operator because we dont know how many elements contains map.keys
*/
keys.push("more");
console.log(keys);