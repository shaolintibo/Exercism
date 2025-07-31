//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...params) => {

  let proverb = ""
  let counter = 0
  let option = typeof params[params.length-1] === 'object'
  let inputNb = params.length - (option ? 2 : 1)

   while(counter<inputNb) {
      proverb += `For want of a ${params[counter]} the ${params[counter+1]} was lost.\n`
      counter++
  }

  if(inputNb>=0){
    const qualifier = option ? params[params.length-1].qualifier+' ' : ''
    proverb += `And all for the want of a ${qualifier}${params[0]}.`
  }
    
  return proverb
};
