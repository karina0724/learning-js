/*
Use el método reduce en combinación con el método concat para “aplanar” un array de arrays en un único
array que tenga todos los elementos de los arrays originales.

let arrays = [[1, 2, 3], [4, 5], [6]];
    → [1, 2, 3, 4, 5, 6]
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

const flattenArray = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, [])
};

console.log(flattenArray(arrays));
