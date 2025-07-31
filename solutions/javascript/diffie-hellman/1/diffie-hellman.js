//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const isPrime = n => ![...Array(n).keys()].slice(2).map(i => !(n%i)).includes(true) && ![0,1].includes(n)

export class DiffieHellman {
  constructor(p, g) {
    if(!(isPrime(p) && isPrime(g))) {
      throw new Error("p and g should be prime number")
    }
    this.p = p
    this.g = g
  }

  getPublicKey(privateKey) {
    if(privateKey<=1 || privateKey>=this.p){
      throw new Error("Private key should be positive")
    }
    return (this.g**privateKey)%this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey**myPrivateKey)%this.p
  }
}
