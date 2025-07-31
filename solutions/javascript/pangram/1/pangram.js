//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  [...(sentence.toLowerCase().replace(/[^a-z]/gi, ''))].forEach((val)=>{
    abc=abc.replace(val, '')
  })
  return abc.length===0
};
