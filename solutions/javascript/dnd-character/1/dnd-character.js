//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (ability) => {
  if(ability<3) throw new Error('Ability scores must be at least 3')
  if(ability>18)throw new Error('Ability scores can be at most 18')
  return Math.floor((ability-10)/2)
};

export class Character {
  constructor(){
    
    this._strength = Character.rollAbility()
    this._dexterity = Character.rollAbility()
    this._constitution = Character.rollAbility()
    this._intelligence = Character.rollAbility()
    this._wisdom = Character.rollAbility()
    this._charisma = Character.rollAbility()

    this._hitpoints = 10
  }
  
  static rollAbility() {
    return [...Array(4)].map(a=>(Math.floor(Math.random()*6)+1))
        .sort((a,b)=>b-a)
        .reduce((acc, val, index)=>
        {
            if(index<3)acc+=val
              return acc
        }, 0)
  }

  get strength() {
    return this._strength
  }

  get dexterity() {
    return this._dexterity
  }

  get constitution() {
    return this._constitution
  }

  get intelligence() {
    return this._intelligence
  }

  get wisdom() {
    return this._wisdom
  }

  get charisma() {
    return this._charisma
  }

  get hitpoints() {
    return this._hitpoints + abilityModifier(this._constitution);
  }
}
