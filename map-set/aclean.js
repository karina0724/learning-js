//https://javascript.info/map-set
/* Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
Write a function aclean(arr) that returns an array cleaned from anagrams.

For instance:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
From every anagram group should remain only one word, no matter which one. */
const aclean = arr => {
    let map = new Map();
   
    //If a word is repeated it will overwrite it
    for (const word of arr) map.set(word.toLowerCase().split("").sort().join(""), word);

    return Array.from(map.values()); 
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr));    
 
