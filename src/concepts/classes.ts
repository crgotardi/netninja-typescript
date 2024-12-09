// classes
interface IPokemonCard {
    name: string,
    hp: number
}

class PokemonCard implements IPokemonCard {
    constructor(name: string, hp: number) {
        this.name = name
        this.hp = hp
    }

    name: string
    hp: number
    private type: string = 'normal'
    private typeSlots: number = 1

    setTypeSlots(slots: number) {
        this.typeSlots = slots
    }

    getTypeSlots() {
        return this.typeSlots
    }
}

const bulbassaur = new PokemonCard('bulbassaur', 100)
  
function addSlotToCards(cards: PokemonCard[]) {
    cards.forEach(card => {
        card.setTypeSlots(4)
    })
}

addSlotToCards([bulbassaur])
console.log(bulbassaur.getTypeSlots())

// abstract classes
abstract class Pokemon {
    constructor(name: string) {
        this.name = name
    }

    name: string
}

class Charizard extends Pokemon {
    constructor() {
        super('charizard')
    }
}

const charizard = new Charizard()
console.log(charizard.name)

