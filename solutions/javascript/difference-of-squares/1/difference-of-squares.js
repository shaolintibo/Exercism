//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    const listNb = [...Array(num).keys()].map(v=>v+1);
    this._squareOfSum = listNb.reduce((acc, v)=>acc+=v, 0)**2
    this._sumOfSquares = listNb.reduce((acc, v)=>acc+=v**2, 0)
  }

  get sumOfSquares() {
    return this._sumOfSquares
  }

  get squareOfSum() {
    return this._squareOfSum
  }

  get difference() {
    return this._squareOfSum-this._sumOfSquares
  }
}
