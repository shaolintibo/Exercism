//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dices, combination) => {
  
  dices = dices.sort((a,b)=>a-b)

  const sum = dices.reduce((acc,val)=>acc+=val, 0)
  const isFullHouse = (new Set(dices).size===2 && new Set(dices.slice(0,-1)).size===2)
  const isYacht = new Set(dices).size===1
  const isForOfAKind = new Set(dices.slice(0,-1)).size===1 || new Set(dices.slice(1)).size===1
  
  //to parse minor fig
  const fig = {"ones":1, "twos":2, "threes":3, "fours":4, "fives":5, "sixes":6}
  const filter = fig[combination]
  if(filter){
      return dices.filter(val=>val===filter).length*filter
  }
  
  switch(combination)
  {
    case "full house":
      return isFullHouse && !isYacht && !isForOfAKind ? sum : 0
    break;
    case "four of a kind":
      if( isForOfAKind || isYacht ){
        return new Set(dices.slice(0,-1)).size===1 ? sum-dices[4] : sum-dices[0]
      }
      return 0
    break;
    case "little straight":
      return dices.join('')==='12345' ? 30 : 0
    break;
    case "big straight":
      return dices.join('')==='23456' ? 30 : 0
    break;
    case "choice":
      return sum
    break;
    case "yacht":
      return isYacht ? 50 : 0 
    break;
  }
};