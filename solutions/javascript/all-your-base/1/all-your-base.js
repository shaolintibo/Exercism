//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (inputNb, inputBase, outBase) => {

  let sign =0
  let validPositiveNb = true
  let leadingZero = false
  let decimalNb = inputNb.reverse().reduce((acc, it, index)=>{
    
    leadingZero ||= (it===0 && index===inputNb.length-1 && inputNb.length>1)
    validPositiveNb &&= it<inputBase 
    sign = Math.min(Math.sign(it), sign) 
    return acc+=it* inputBase**index
  }, 0)

  if( inputBase<=1) throw new Error('Wrong input base')
  
  if(!validPositiveNb || sign<0 || leadingZero ||
     inputBase===0 || inputNb.length===0 ||
     (inputNb.length>1 && decimalNb===0) || 
     (decimalNb === 0 && inputNb.lengt>1)) throw new Error('Input has wrong format')
  
  if(outBase<=1) throw new Error('Wrong output base')
  
  if(outBase==10) return String(decimalNb).split('').map(v=>Number(v))
  
  const largest_power = ~~(Math.log(decimalNb) / Math.log(outBase));
  const result = [];
  for (let pow = largest_power; pow >= 0; pow--) {
    const digit = ~~(decimalNb / outBase ** pow);
    decimalNb -= digit * outBase ** pow;
    result.push(digit);
  }
  return result;
};
