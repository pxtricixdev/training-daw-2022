/*Crear un método que nos permita insertar un elemento en un array si y sólo si, no existe previamente. Además, recibirá un tercer parámetro indicando si tenemos que insertar el elemento al principio (true) o no (false)*/

//const assert = require('assert').strict

function insertIfNotExists(array, item, position) {
    if (!array.includes(item)) {
        if (position) {
            array.unshift(item);
        }
        else {
            array.push(item);
        }
    }
    return array
}

let array = ['pera', 'manzana']

// Prueba 1
let result = insertIfNotExists(array, 'pera', false);
console.log(result);

// Prueba 2
result = insertIfNotExists(array, 'melón', false);
console.log(result); 

// Prueba 3
result = insertIfNotExists(array, 'melocotón', true);
console.log(result); 

// Prueba 4
result = insertIfNotExists(array, 'melocotón', true );
console.log(result); 

// Prueba 5
result = insertIfNotExists(array, 'fresa', false );
console.log(result);

