let PokemonTeam = require('./pokemonTeam')
let pt = new PokemonTeam()

let firstPokemon = pt.addPokemon(25, 'pikachu', 20, 'electric', [['thunderbolt', 90], ['thunder', 120] ])
let secondPokemon = pt.addPokemon(87, 'electabuzz', 50, 'electric', [['thunder punch', 90], ['thunder', 120] ])
let thirdPokemon = pt.addPokemon(4, 'squirtle', 20, 'aigua', [['bubbles', 20], ['water gun', 40] ])
let fourthPokemon = pt.addPokemon(72, 'seadra', 50, 'aigua', [['hydro pump', 120], ['ice beam', 90] ])
let fifthPokemon = pt.addPokemon(8, 'inventamon', 50, 'laser beam', [['light ray', 20], ['explosion', 40] ])
let sixthPokemon = pt.addPokemon(21, 'toomanymovesmon', 100, 'aigua', [['bubbles', 20], ['water gun', 40], ['thunder punch', 90], ['thunder', 120], ['hydro pump', 120]])


let names = pt.getNames('electric')
let moves = pt.getMoves()
let lvlUp = pt.lvlUp('aigua')
let showPokeTeam = pt.getPokeList()
