//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(real, imag) {
    this._real = real
    this._imag = imag
  }

  get real() {
    return this._real
  }

  get imag() {
    return this._imag
  }

  add(comp) {
    return new ComplexNumber(this._real+comp.real, this._imag+comp.imag)
  }

  sub(comp) {
    return new ComplexNumber(this._real-comp.real, this._imag-comp.imag)
  }

  div(comp) {
    return new ComplexNumber((this._real*comp.real+this.imag*comp.imag)/(comp.real**2+comp.imag**2),
                              (this.imag*comp.real-this._real*comp.imag)/(comp.real**2+comp.imag**2))
  }

  mul(comp) {
    return new ComplexNumber(this._real*comp.real-this.imag*comp.imag,
                              this.imag*comp.real+this._real*comp.imag)
  }

  get abs() {
    return (this._real**2+this._imag**2)**(1/2)
  }

  get conj() {
    return new ComplexNumber(this._real, this.imag!=0 ? -this.imag : this.imag)
  }

  get exp() {
    return new ComplexNumber(Math.exp(this.real)*Math.cos(this.imag), Math.exp(this.real)*Math.sin(this.imag))
  }
}
