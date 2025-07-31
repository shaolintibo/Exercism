//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (numero) => {
  let primes = [];
  // Print the number of 2s that divide n 
  while (numero % 2 == 0) 
  { 
    primes.push(2); 
    numero = Math.floor(numero/2); 
  } 

  // numero must be odd at this point. So we can skip 
  // one element (Note i = i +2) 
  for (let i = 3; i <= Math.sqrt(numero); i = i + 2) 
  { 
    // While i divides numero, print i and divide numero 
    while (numero % i == 0) 
    { 
      primes.push(i); 
      numero = Math.floor(numero/i); 
    } 
  } 

  // This condition is to handle the case when numero 
  // is a prime number greater than 2 
  if (numero > 2) 
      primes.push(numero); 
        
  return primes
};
