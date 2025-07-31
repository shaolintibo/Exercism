//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (raindropsNb) => {
  const divBySeven = raindropsNb%7===0
  const divByThree = raindropsNb%3===0
  const divByFive = raindropsNb%5===0

  let sound = ''
  sound = divByThree ? 'Pling' : sound
  sound = divByFive ? sound+'Plang' : sound
  sound = divBySeven ? sound+'Plong' : sound

  return (!divBySeven && !divByThree && !divByFive) ? raindropsNb.toString() : sound
};
