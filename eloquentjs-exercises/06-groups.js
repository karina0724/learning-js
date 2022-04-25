/*
Escribe una clase llamada Conjunto. Como Set, debe tener los métodos add (“añadir”),
delete (“eliminar”), y has (“tiene”). Su constructor crea un conjunto vacío,
añadir agrega un valor al conjunto (pero solo si no es ya un miembro), eliminar
elimina su argumento del conjunto (si era un miembro) y tiene retorna un valor booleano
que indica si su argumento es un miembro del conjunto.

Usa el operador ===, o algo equivalente como indexOf, para determinar si dos valores
son iguales.

Proporcionale a la clase un método estático desde que tome un objeto iterable como
argumento y cree un grupo que contenga todos los valores producidos al iterar sobre el.
*/

class Group {

    constructor () {
      this.set = [];
    }

    add (element) {
        if(!this.set.includes(element)) this.set.push(element);
    }

    delete (element) {
        if(this.set.includes(element)) {
            this.set = this.set.filter(e => e !== element);
        } 
    }

    has (element) {
       return this.set.includes(element);
    }

    static from (iterable) {
        let newGroup = new Group();
        for (const iterator of iterable) {
            newGroup.add(iterator);
        }
        return newGroup;
    }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false 