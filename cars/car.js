class Car {
    constructor(cilinder, brand, gasType, color) {
        let gasCheck = this.gasCheck(gasType)

        if(gasCheck) {
            
        this.car = {
            cilinder : cilinder,
            brand : brand,
            gasType : gasType,
            color: color
        }

        return this.car
        }
    }

    gasCheck(gasType){
        let gasTypeArray = [`gas`, `gasoil`, `hybrid`, `electric`]
        let check = gasTypeArray.includes(gasType)

        if (check) {
            console.log(check)
            return check
        } else {throw new Error(`${gasType} error. Gas types allowed: ${gasTypeArray}`)}
    }
}

module.exports = Car