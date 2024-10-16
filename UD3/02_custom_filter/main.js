function select(array, condition) {
    switch (condition) {
        case pairs:
            return array.filter(num => num % 2 === 0);
            break;
        case gt15:
            return array.filter(num => num > 15);
            break;
        case lt10:
            return array.filter(num => num > 10);
            break;
    }
    
}



let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

// sólo pares
(select(values, pairs), [2])

// mayores que 15
(select(values, gt15), [17, 23, 29])

// menores de 10
(select(values, lt10), [1, 2, 3, 5, 7])