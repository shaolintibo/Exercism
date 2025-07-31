//
// This is only a SKELETON file for the 'Eliud's Eggs' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const eggCount = (n) => {
  let binary=[]
  while(n!=0){
    binary.push(n%2)
    n = parseInt(n/2)
  }
  return binary.filter(it=>it==1).length
};
