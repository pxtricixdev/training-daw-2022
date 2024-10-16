// Crear un objeto Persona con los siguientes 
// datos (nombre, apellidos, edad, género, dirección)

function createPerson(name, lastname, years, gender, address) {
    let persona = {
        name: name,
        lastname: lastname,
        years: years,
        gender: gender,
        address: address,
    }
    console.log(persona)
}

let person = createPerson('John', 'Foo', 35, 'male', 'fake stree 123')
