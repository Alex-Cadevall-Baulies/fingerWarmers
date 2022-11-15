class PokemonTeam{

    constructor() {
        
        this.pokemonTeam = []
        
    }

    async addPokemon(number, pokeName, lvl, type, moves) {
        let pokeCheck = this.checkPokemon(lvl, type, moves)

        if (pokeCheck) {
        this.pokemonTeam.push({
        number : number,
        name : pokeName,
        lvl : lvl,
        type : type,
        moves : moves
        })

        return this.pokemonTeam
        } else {console.log(`revisa les dades`)}
    }

    checkPokemon(lvl, type, moves) {
        
        let allowedTypes = ['foc', 'aigua', 'planta', 'electric']
        let checkType = allowedTypes.some(data => {return data === type})
        
        if (lvl > 100 || lvl < 0) {
            console.log(`El pokemon ha d'estar entre el lvl 1 i 100`)
            return false
        } else if (!checkType) {
            console.log(`Els tipus acceptats son ${allowedTypes}`)
            return false }
        else if (moves.length > 4) {
            console.log(`El pokemon només pot tenir 4 atacs`)
            return false
        } else if (this.pokemonTeam > 6) {
            console.log(`El equip només pot tenir 6 pokemons`)
            return false
        } else {
            return true
        }
    }

    getNames(type) {
        console.log(`${type} pokemon names:`)
        let nameFilter = this.pokemonTeam.filter((data) =>{
            if(data.type === type) {
                console.log(data.name, data.type)
            }
        })

        return nameFilter
    }

    getMoves(){
        console.log(`Moves:`)
        let moveFilter = this.pokemonTeam.map((data) => console.log(data.name, data.moves))
        return moveFilter
    }

    lvlUp(type) {
        console.log(`${type} pokemon lvlUp:`)
        let lvlUp = this.pokemonTeam.forEach((data, index) => {
            if(data.type === type) {
                this.pokemonTeam[index].lvl += 2
                console.log(data.name, data.lvl)
            }
        })
    }

    getPokeList() {
        console.table(this.pokemonTeam)
    }

}

module.exports = PokemonTeam