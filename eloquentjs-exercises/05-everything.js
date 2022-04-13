/*
    Analogous to the some method, arrays also have an every method. This one returns true when the given
    function returns true for every element in the array. In a way, some is a version of the || operator
    that acts on arrays, and every is like the && operator.

    Implement every as a function that takes an array and a predicate function as parameters. Write two
    versions, one using a loop and one using the some method.

    console.log(every([1, 3, 5], n => n < 10));
        → true
    console.log(every([2, 4, 16], n => n < 10));
        → false
    console.log(every([], n => n < 10));
*/

const everyWithLoop = (arr, test) => {
    for(let i = 0; i < arr.length; i++) if(!test(arr[i])) return false;
    return true;
}
 
 console.log(everyWithLoop([1, 3, 5], n => n < 10));
 console.log(everyWithLoop([2, 4, 16], n => n < 10));
 console.log(everyWithLoop([], n => n < 10));
 
const everyWithSome = (arr, test) => !arr.some(x => !test(x));
 
 console.log(everyWithSome([1, 3, 5], (n, index) => n < 10));
 console.log(everyWithSome([2, 4, 16], n => n < 10));
 console.log(everyWithSome([], n => n < 10));