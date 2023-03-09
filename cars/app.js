const Car = require('./car')

let cars = [
    new Car(2, 'mercedes', 'gasoil', 'blue'),
    new Car(4, 'bmw', 'gas', 'yellow'),
    new Car(2, 'bugatti', 'gas', 'green'),
    new Car(5, 'fiat', 'hybrid', 'red'),
    new Car(2, 'renault', 'electric', 'gray'),
    new Car(1, 'mercedes', 'electric', 'pink')
]

console.table(cars)

function changeCarsColour() {
    for (i = 0; i < cars.length; i++) {
        if (i === 0 || i % 2 === 0) {
            cars[i].color = 'blue'
        } else {
            cars[i].color = 'red'
        }
        console.table(cars[i])
    }
    console.table(cars)
}

function findGasType(gas) {
    let gasTypeCar = cars.filter(data => data.gasType === gas)
    console.table(gasTypeCar)
}

changeCarsColour()
findGasType('gas')