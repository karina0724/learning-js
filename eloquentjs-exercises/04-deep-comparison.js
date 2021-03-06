/*
Escribe una función igualdadProfunda que toma dos valores y retorne true solo si
tienen el mismo valor o son objetos con las mismas propiedades, donde los valores 
de las propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda.

Para saber si los valores deben ser comparados directamente (usa el operador == para eso) o si 
deben tener sus propiedades comparadas, puedes usar el operador typeof. Si produce "object" para 
ambos valores, deberías hacer una comparación profunda. Pero tienes que tomar una excepción tonta 
en cuenta: debido a un accidente histórico, typeof null también produce "object".

La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para
compararlos.
*/

let objeto = {
    aqui: {
        hay: "un"
    },
    objeto: 2
};

const deepEqual = (a, b) => {
    if(a === null || b === null) return false;
    if(a === b) return true;

    let equal = false;
    if(typeof a === "object" && !Array.isArray(a) && typeof b === "object" && !Array.isArray(b)){
        let bKeys = Object.keys(b);
        let aKeys = Object.keys(a);

        for(let i = 0; i < bKeys.length; i++){
            if(aKeys[i] == bKeys[i]) {
                if(typeof a[bKeys[i]] === "object" && a[bKeys[i]] !== null && typeof b[bKeys[i]] === "object" && b[bKeys[i]] !== null) 
                equal = deepEqual(a[aKeys[i]], b[bKeys[i]]) 
                    else equal = a[aKeys[i]] === b[bKeys[i]]; 
                
                if(!equal) return false; 
            }
            else return false;
        }
    } 
    return equal;
}

console.log(deepEqual(objeto, objeto));
console.log(deepEqual(objeto, {aqui: 1, object: 2}));
console.log(deepEqual(objeto, {aqui: {hay: "un"}, objeto: 2}));
console.log(deepEqual(objeto, {aqui: {hay: "un"}, objeto: 3}));