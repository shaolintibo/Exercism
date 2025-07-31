//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  
  if(span>input.length) throw new Error('Span must be smaller than string length')
  
  if(input.toLowerCase().match(/[a-z]/g)!==null) throw new Error('Digits input must only contain digits')
  
  if(span<=0) throw new Error('Span must be greater than zero')

  let max = 0;
  input.split('').forEach((it, id, tab)=>{
    const sub=tab.slice(id, id+span)
    if(sub.length!==span) return 
    max = Math.max(max, sub.reduce((acc,it)=>acc*=it,1))
  })
  return max
};
