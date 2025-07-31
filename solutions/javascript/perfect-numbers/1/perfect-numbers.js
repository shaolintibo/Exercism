//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (numero) => {
  if(numero<0) {
    throw new Error('Classification is only possible for natural numbers.')
  }
  if(numero===0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  let sum = 0;
  for (let i = 1; i < numero; i++) {
    if (numero % i == 0) sum += i;
  }
  if (sum == numero) return "perfect";

  return numero<sum ? "abundant" : "deficient"
};
