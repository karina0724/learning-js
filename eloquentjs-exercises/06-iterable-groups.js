/*
Haz iterable la clase Conjunto del ejercicio anterior. Puedes remitirte a la sección
acerca de la interfaz del iterador anteriormente en el capítulo si ya no recuerdas
muy bien la forma exacta de la interfaz.

Si usaste un array para representar a los miembros del conjunto, no solo retornes el
iterador creado llamando al método Symbol.iterator en el array. Eso funcionaría, pero
frustra el propósito de este ejercicio.

Está bien si tu iterador se comporta de manera extraña cuando el conjunto es modificado
durante la iteración.
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

    [Symbol.iterator]() {
        return new GroupIterator(this.set);
    }
}

class GroupIterator{
   curr_position = 0;

    next() {
        if(this.curr_position < this.group.set.length) {
            let result = {value: this.group.set[this.curr_position], done: false};
            this.curr_position++;
            return result;
        } else {
            return {done: true};
        }
    }

    [Symbol.iterator]() {
        return this;
    }

    constructor(group) {    
        this.group = group;
    }           

}