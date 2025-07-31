//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Rational {
  constructor(num, denum) {
    this.num = num
    this.denum = denum
  }

  add(rational) {
    const denum = this.num*rational.denum + rational.num*this.denum
    return new Rational( denum, denum===0 ? 1 : this.denum * rational.denum )
  }

  sub(rational) {
    const denum = this.num*rational.denum - rational.num*this.denum
    return new Rational(denum, denum===0 ? 1 : this.denum * rational.denum )
  }

  mul(rational) {
    const num = this.num * rational.num
    const denum = this.denum * rational.denum
    const gcd = this.gcd(num, denum)
    return new Rational(num/gcd , denum/gcd )
  }

  div(rational) {
    const num = this.num * rational.denum
    const denum = rational.num * this.denum
    const gcd = this.gcd(num, denum)
    return new Rational(Math.sign(num) * Math.sign(denum) * Math.abs(num/gcd) , Math.abs(denum/gcd) )
  }
  abs() {
    return new Rational(Math.abs(this.num), Math.abs(this.denum))
  }

  exprational(exp) {
    return new Rational( this.num**exp, this.denum**exp )
  }

  expreal(real) {
    return Number(((real**this.num)**(1/this.denum)).toFixed(2))
  }

  reduce() {
    const num = this.num
    const denum = this.denum
    const gcd = this.gcd(num, denum)
    return new Rational( Math.sign(num) * Math.sign(denum) * Math.abs(num/gcd), Math.abs(denum/gcd) )
  }
  
  gcd(a, b) {
    return b ? this.gcd(b, a % b) : Math.abs(a);
  }
}
