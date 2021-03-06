/*
Escribe una función arrayALista que construya una estructura de lista como el que se muestra
arriba cuando se le da [1, 2, 3] como argumento. También escribe una función listaAArray
que produzca un array de una lista. 

Luego agrega una función de utilidad preceder, que tome
un elemento y una lista y creé una nueva lista que agrega el elemento al frente de la lista
de entrada, y 
posicion, que toma una lista y un número y retorne el elemento en la posición
dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no exista tal
elemento.

Si aún no lo has hecho, también escribe una versión recursiva de posicion.

console.log(arrayALista([10, 20]));
    → {valor: 10, resto: {valor: 20, resto: null}}
console.log(listaAArray(arrayALista([10, 20, 30])));
    → [10, 20, 30]
console.log(preceder(10, preceder(20, null)));
    → {valor: 10, resto: {valor: 20, resto: null}}
console.log(posicion(arrayALista([10, 20, 30]), 1));
    → 20
*/

const arrayToList  = (arr) => {
    let json = {};
    for(let i = 1; i <= arr.length; i++){
        json['value'] = arr[i-1];
        json['rest'] = arr[i] == undefined ? null : arrayToList(arr.splice(i));
    }
    return json;
}
console.log(arrayToList([10, 20, 30]));

let list = {
    value: 10, 
    rest: {
        value: 20,
        rest: {
            value: 30,
            rest: null
        }
    }
}

const listToArray = (list) => {
    let array = [];
    for (let nodo = list; nodo; nodo = nodo.rest) {
       array.push(nodo.value);
    }
    return array;
}
console.log(listToArray(list));

const prepend = (element, list) => {return {value:element, rest:list} };
console.log(prepend(80, prepend(20, null)));

const nth = (list, position) => listToArray(list)[position] ;
console.log(nth(arrayToList([10,20,30]), 1));

//link to function deepMergeFlatten, flatten an object
//https://atomizedobjects.com/blog/javascript/how-to-merge-two-objects-in-javascript/#:~:text=The%20easiest%20way%20to%20merge,merged%20into%20the%20parent%20object.