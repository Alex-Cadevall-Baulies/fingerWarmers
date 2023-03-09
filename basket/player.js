class Player{
    constructor(name, age, height, weight, playPosition) {
        this.player = {
            name : name,
            age : age,
            height : height,
            weight : weight,
            Position : playPosition
        }

        return this.player
    }
}

module.exports = Player