function pingPong(num) {
    num.forEach(element => {
        if(element % 5 === 0) {
            if(element % 10 === 0) {
                console.log('PONG')
            } else {
                console.log('PING')
            }
        }
        else {
            console.log(element)
        }
    })
};
    
let numero = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
pingPong(numero)

// expected output
// 1
// 2
// 3
// 4
// 5 PING
// 6
// 7
// 8
// 9
// 10 PONG
// 11
// 12
// 13
// 14
// 15 PING
// 16
// 17
// 18
// 19
// 20 PONG