//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (input) => {

  if(input==0) return false
  const res = [...input].reverse().filter(val=>val!=' ').map((val,index) => 
  {
    if(index%2===1){
      val *= 2
      val = val>9 ? val-9 : val
    }
    return val
  }).reduce((acc, val)=>acc+=parseInt(val), 0)
  return res%10===0
};
