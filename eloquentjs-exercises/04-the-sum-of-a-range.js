/*
Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array que contenga 
todos los números desde inicio hasta (e incluyendo) final.

Luego, escribe una función suma que tome un array de números y retorne la suma de estos números.
Ejecuta el programa de ejemplo y ve si realmente retorna 55.

Como una misión extra, modifica tu función rango para tomar un tercer argumento opcional que indique
el valor de “paso” utilizado para cuando construyas el array. Si no se da ningún paso, los elementos
suben en incrementos de uno, correspondiedo al comportamiento anterior. La llamada a la función
rango(1, 10, 2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione con valores de
pasos negativos para que rango(5, 2, -1) produzca [5, 4, 3, 2].

console.log(rango(1, 10));
    → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(5, 2, -1));
    → [5, 4, 3, 2]
console.log(sum(rango(1, 10)));
    → 55
*/

//sum of range
const sumOfRange = (start, end) => {
    let range = [];
    for(let i = start; i <= end; i++) range.push(i);
    return range;
}
console.log(sumOfRange(1, 10));

//sum of range with step
const sumOfRangeWithStep = (start, end, step = 1) => {
    let range = [];
    step = Math.abs(step);

    if(start > end) for(let i = start; i >= end; i = i - step) range.push(i);
    else for(let i = start; i <= end; i = i + step) range.push(i);
    
    return range;
}
console.log(sumOfRangeWithStep(5, 2, -1));

//sum
const sum = (arr) => arr.reduce((acc, curr) => acc + curr);
console.log(sum(sumOfRange(1, 10)));
