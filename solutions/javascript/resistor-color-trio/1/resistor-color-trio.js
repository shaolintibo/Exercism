//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
]

export class ResistorColorTrio {
  constructor(colors) {
    this.colors = colors
  }

  get label() {

    let unit = 'ohms';
    let value = this.colors.reduce((acc, val, index)=>{
      const colorIndex = colors.indexOf(val)

      if(colorIndex===-1){
        throw new Error(/invalid color/);
      }else{
        acc += index<2 ? colorIndex : String("0").repeat(colorIndex)
        return acc
      }
    }, "")

    if(value.endsWith("000")){
      value= parseInt(value)/1000
      unit=`kilo${unit}`
    }
    return `Resistor value: ${value} ${unit}`
  }
}
