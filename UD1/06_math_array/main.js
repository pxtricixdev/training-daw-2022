// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos

function doCalculation() {
    let array = [1,2,3,4,5,6]
    let suma = 0;
    for (let i = 0; i<array.length; i++) {
        suma += array[i];
    }
    console.log(`La suma del array es: ${suma}`)

    let elementoMayor = array[0];
    for (let i = 0; i<array.length; i++) {
        if (elementoMayor < array[i]) {
            elementoMayor = array[i];
        }
    }
    console.log(`El numero mayor es : ${elementoMayor}`)

    let elementoMenor = array[0];
    for (let i = 0; i<array.length; i++) {
        if (elementoMenor > array[i]) {
            elementoMenor = array[i];
        }
    }
    console.log(`El numero menor es : ${elementoMenor}`)

}

doCalculation();

