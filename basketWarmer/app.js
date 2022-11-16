const Player = require('./player')

const test = [
    new Player('Johnny', 23, 2.10, 80, 'shooting guard'),
    new Player('Laura', 23, 2.20, 80, 'shooting guard'),
    new Player('Romania', 23, 2.15, 80, 'shooting guard'),
    new Player('Roberto', 19, 1.90, 70, 'shooting guard')
]

function showHeight(){
    const tallPlayer = test.filter(data => data.height > 2)

    console.log(`Height list:`)
    for (i=0; i < tallPlayer.length; i++) {
    console.log(tallPlayer[i].name, tallPlayer[i].height)
    }
}

function showAge(){
    const tallPlayer = test.filter(data => data.age < 21)

    console.log(`\nAge list:`)

    for (i=0; i < tallPlayer.length; i++) {
    console.log(tallPlayer[i].name, tallPlayer[i].age)
    }
}

showHeight()
showAge()