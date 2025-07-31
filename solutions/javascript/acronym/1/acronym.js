//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (word) => {
  return word.split(/ |-|_/g).filter(a=>a!=='').map(a=>[...a][0].toUpperCase()).join("")
};
