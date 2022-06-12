/*
Un tipo vector
Escribe una clase Vec que represente un vector en un espacio de dos dimensiones.
Toma los parámetros (numericos) x y y, que debería guardar como propiedades del
mismo nombre.

Dale al prototipo de Vector dos métodos, mas y menos, los cuales toman otro vector
como parámetro y retornan un nuevo vector que tiene la suma o diferencia de los
valores x y y de los dos vectores (this y el parámetro).

Agrega una propiedad getter llamada longitud al prototipo que calcule la longitud
del vector—es decir, la distancia del punto (x, y) desde el origen (0, 0).

console.log(new Vector(1, 2).mas(new Vector(2, 3)));
    → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).menos(new Vector(2, 3)));
    → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).longitud);
    → 5
*/

class Vector {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }

    mas(vector){
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    menos(vector){
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    get longitud (){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
} 

console.log(new Vector(1, 2).mas(new Vector(2, 3)));
console.log(new Vector(1, 2).menos(new Vector(2, 3)));
console.log(new Vector(3, 4).longitud);