//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  
  constructor(...sides) {
    this.sides = sides
  }
  
  isValidTriangle(){
    const [a,b,c] = this.sides
    return  (a + b >= c) && (b + c >= a) && (a + c >= b) && a!=0 && b!=0 && c!=0 
  }

  get isEquilateral() {
    //const [a,b,c] = this.sides
    //return this.isValidTriangle() && a===b && a===c && b===c
    return this.isValidTriangle() && this.sides.every(v=>v===this.sides[0])
  }
  
  get isIsosceles() {
    const [a,b,c] = this.sides
    return  this.isValidTriangle() && (a===b || c===a || c===b )
  }

  get isScalene() {
    const [a,b,c] = this.sides
    return this.isValidTriangle() && a!==b && b!==c
  }
}
