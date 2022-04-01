/*
Escribe una función arrayALista que construya una estructura de lista como el que se muestra
arriba cuando se le da [1, 2, 3] como argumento. También escribe una función listaAArray
que produzca un array de una lista. Luego agrega una función de utilidad preceder, que tome
un elemento y una lista y creé una nueva lista que agrega el elemento al frente de la lista
de entrada, y posicion, que toma una lista y un número y retorne el elemento en la posición
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

let test = {
    valor: 10, 
    resto: {
        valor: 20, 
        resto: null
    }
}

const arrayToList  = (arr) => {
    let json = {};
    for(let i = 1; i <= arr.length; i++){
        json['valor'] = arr[i-1];
        json['resto'] = arr[i] == undefined ? null : arrayToList(arr.splice(i));
    }
    return json;
}
console.log(arrayToList([10, 20, 30]));


const listToArray = () => {}
