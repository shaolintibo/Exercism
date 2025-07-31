//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {

  return parseInt(colors.slice(0, 2).reduce((acc, color, id)=>{
      return acc+= COLORS.indexOf(color);
  }, ''))
};

const COLORS=[
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
