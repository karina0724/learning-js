/*
Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar
usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero
positivo es par o impar:

Zero es par.
Uno es impar.
Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo 
parámetro (un número entero, positivo) y devolver un Booleano.

Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto?
Respuesta: funciona de esa manera porque es un número negativo, si sumo dos en vez de restarle dos.

console.log(esPar(50));
    → true
console.log(esPar(75));
    → false
console.log(esPar(-1));
    → ??
*/

const isEven = (n) => {
    if (n >= 0) {
        if (n === 0) return true;
        if( n === 1) return false;
        return isEven(n-2);
    }
    return "The function only accepts positive numbers";
}

console.log(isEven(-1));
