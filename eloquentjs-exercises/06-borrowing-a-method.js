/*
Anteriormente en el capítulo mencioné que el metodo hasOwnProperty de un objeto
puede usarse como una alternativa más robusta al operador in cuando quieras
ignorar las propiedades del prototipo. Pero, ¿y si tu mapa necesita incluir
la palabra "hasOwnProperty"? Ya no podrás llamar a ese método ya que la
propiedad del objeto oculta el valor del método.

¿Puedes pensar en una forma de llamar hasOwnProperty en un objeto que tiene una
propia propiedad con ese nombre?

let mapa = {uno: true, dos: true, hasOwnProperty: true};

    Arregla esta llamada
console.log(mapa.hasOwnProperty("uno"));
    → true
*/