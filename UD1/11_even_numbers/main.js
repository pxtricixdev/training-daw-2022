function evenNumbers(array) {
    array.forEach(element => {
        if (element % 2 === 0) {
            console.log(element)
        }
    });
}

let array = [1,2,3,4,5,6]
evenNumbers(array)