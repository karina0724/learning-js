/* EJERCICIO 1
El primer ejercicio es realizar una búsqueda en un array de objetos de personas 

Buscar
* 5 personas mayores de 50 años
* 5 personas entre 20 y 30
* 5 personas que su profesión sea IT

Se debe crear el array*/


let persons = [{nombre: 'Karina', edad: 24, profesion:'IT'}, 
                {nombre: 'Vanessa', edad: 25, profesion:'Contabilidad'},
                {nombre: 'Leidy', edad: 30, profesion:'Medicina'},
                {nombre: 'Helen', edad: 24, profesion:'Mercadeo'}, 
                {nombre: 'Delsi', edad: 50, profesion:'IT'}, 
                {nombre: 'Pedro', edad: 51, profesion:'Contabilidad'},
                {nombre: 'Angelito', edad: 30, profesion:'Mercadeo'},
                {nombre: 'Mamiata', edad: 52, profesion:'IT'},
                {nombre: 'Camilita', edad: 24, profesion:'Mercadeo'}, 
                {nombre: 'Mamifina', edad: 53, profesion:'Contabilidad'},
                {nombre: 'Tiatia', edad: 54, profesion:'Medicina'},
                {nombre: 'Mama', edad: 55, profesion:'IT'},
                {nombre: 'Papa', edad: 24, profesion:'Medicina'}, 
                {nombre: 'Rossely', edad: 25, profesion:'IT'},
                {nombre: 'Alberto', edad: 30, profesion:'IT'}];

function mayoresCincuenta (persons){return persons.filter(person => person.edad > 50)}
function entreVeinteTrenta (persons){return persons.filter(person => person.edad >= 20 || person.edad <= 30)}
function profesionTI (persons){return persons.filter(person => person.profesion == 'IT')}

function busquedaPersonas(amount, persons){
    let results = {};
    let resultsmayoresCincuenta = [];
    let resultsentreVeinteTrenta = [];
    let resultsprofesionTI = [];

    results['mayoresCincuenta'] = resultsmayoresCincuenta;
    results['entreVeinteTrenta'] = resultsentreVeinteTrenta;
    results['profesionTI'] = resultsprofesionTI;

    const mayores_Cincuenta = mayoresCincuenta (persons);
    const entre_VeinteTrenta = entreVeinteTrenta (persons);
    const profesion_TI = profesionTI (persons);

    for (let x = 0; x < amount; x++) {
        resultsmayoresCincuenta.push(mayores_Cincuenta[x]); 
        resultsentreVeinteTrenta.push(entre_VeinteTrenta[x]), 
        resultsprofesionTI.push(profesion_TI[x])
    }

    
    return results;
}

console.log(busquedaPersonas(5, persons));