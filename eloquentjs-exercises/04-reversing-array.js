/*
Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen
sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar.
El primero, revertirArray, toma un array como argumento y produce un nuevo array que tiene los mismos
elementos pero en el orden inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el método reverse:
modifica el array dado como argumento invirtiendo sus elementos. Ninguno de los dos puede usar el método 
reverse estándar.

console.log(revertirArray(["A", "B", "C"]));
    → ["C", "B", "A"];

let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
    → [5, 4, 3, 2, 1]
*/

const arrayReverse = (arr) => {
    let newArray = [];
    for(let i = arr.length - 1 ; i >= 0; i--) newArray.push(arr[i]);
    return newArray;
}
console.log(arrayReverse(["A", "B", "C"]));


let valorArray = [1, 2, 3, 4, 5];
const revertirArrayEnSuLugar = (arr) => {
    for(let i = 0; i < arr.length; i++) arr.splice(i, 0, arr.pop())
    return arr;
}
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);