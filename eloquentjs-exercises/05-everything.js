/*
Analogous to the some method, arrays also have an every method. This one returns true
when the given function returns true for every element in the array. In a way, some
is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters.
Write two versions, one using a loop and one using the some method.

console.log(every([1, 3, 5], n => n < 10));
    → true
console.log(every([2, 4, 16], n => n < 10));
    → false
console.log(every([], n => n < 10));
     → true
*/

const everyWithLoop = (arr, test) => {
    for(let i = 0; i < arr.length; i++) if(!test(arr)) return false;
    return true;
}

console.log(everyWithLoop([1, 3, 5], n => n < 10));
console.log(everyWithLoop([2, 4, 16], n => n < 10));
console.log(everyWithLoop([], n => n < 10));

const everyWithSome = (arr, test) => {
    arr.forEach(element => {
       console.log(![element].some(test));
       if(![element].some(test)) return false;
    });
    return true;
}

console.log(everyWithSome([1, 3, 5], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));
console.log(everyWithSome([], n => n < 10));
