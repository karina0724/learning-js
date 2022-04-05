/* 
    Escribe una función min que tome dos argumentos y retorne su mínimo.
    console.log(min(0, 10));
        → 0
    console.log(min(0, -10));
        → -10
*/

const min = (num1, num2) => {
    if(num1 === num2) return "The numbers are identical";
    return (num1 > num2) ? num1 : num2;
};

console.log(min(0, 10))
console.log(min(0, -10))