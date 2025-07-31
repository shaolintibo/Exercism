//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (input) => {
  if(input<1){ 
    throw new Error('Only positive numbers are allowed');
  }
  let counter=0
  while (input!=1){
    input = input%2==0 ? input/2 : 3*input+1
    counter++
  }
  return counter
};
