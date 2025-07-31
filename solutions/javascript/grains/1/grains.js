/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (caseNb) => {
  if(!(caseNb>0 && caseNb<65)){
    throw new Error('square must be between 1 and 64')
  }
  return BigInt(2)**BigInt(caseNb-1)
};

export const total = () => {
  let sum = BigInt(0)
  for(let i=1; i<65;i++){
    sum+=square(i)
  }
  return sum
};
