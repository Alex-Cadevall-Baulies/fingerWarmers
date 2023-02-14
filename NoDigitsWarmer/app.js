//Using Roman Numerals
const roman = [{
    letter: "C",
    number: 100
}, {
    letter: "XC",
    number: 90
}, {
    letter: "L",
    number: 50
}, {
    letter: "XL",
    number: 40
}, {
    letter: "X",
    number: 10
}, {
    letter: "IX",
    number: 9
}, {
    letter: "V",
    number: 5
}, {
    letter: "IV",
    number: 4
}, {
    letter: "I",
    number: 1
}]

const digitToLetter = (num) => {
    let letter = ''
    for (index in roman) {
        let q = Math.floor(num / roman[index].number)
        letter += roman[index].letter.repeat(q)
        num %= roman[index].number
    }
    return letter
}

const zeroToHundred = () => {
    const array = []
    for (let i = 0; i <= 100; i++) {
        if (i == 0) {
            array.push('O')
        } else {
            array.push(digitToLetter(i))
        }
    }
    return array
}

console.log(zeroToHundred())