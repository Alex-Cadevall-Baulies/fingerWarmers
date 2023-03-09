class Calculate {
    constructor(operation, numberOne, numberTwo) {
        this.operation = operation
        this.numberOne = Number(numberOne)
        this.numberTwo = Number(numberTwo)

        console.log(this.calculate())
    }

    calculate() {

        if (this.operation === 'suma') {
            return this.numberOne + this.numberTwo
        } else if (this.operation === 'resta') {
            return this.numberOne - this.numberTwo
        } else if (this.operation === 'multiplicacio') {
            return this.numberOne * this.numberTwo
        } else if (this.operation === 'divisio') {
            return this.numberOne / this.numberTwo
        } else if (this.operation === 'modul') {
            return this.numberOne % this.numberTwo
        } else {
            return `${this.operation} no contemplat, prova amb un altre`
        }
    }
}

module.exports = Calculate