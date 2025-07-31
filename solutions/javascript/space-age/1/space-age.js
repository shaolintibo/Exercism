//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (name, time) => {
  let orbitalPeriod;
  switch(name){
    case 'mercury': 
      orbitalPeriod = 0.2408467
      break
    case 'venus':
      orbitalPeriod = 0.61519726
      break
    case 'earth':
      orbitalPeriod = 1.0
     break
    case 'mars':
      orbitalPeriod = 1.8808158
      break
    case 'jupiter':
      orbitalPeriod = 11.862615
      break
    case 'saturn':
      orbitalPeriod = 29.447498
        break
    case 'uranus':
      orbitalPeriod = 84.016846
      break
    case 'neptune':
      orbitalPeriod = 164.79132
      break
  }
  return +(time/(60*60*24*orbitalPeriod*365.25)).toFixed(2)
};
