//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
  let out = ""
  let count =1
  let input = str.split("")
  let nbChar=input.length

  if(nbChar===0) return '';
  
  const countNb = (count) => (count===1 ? '' : count)+buf
  let buf = input[0]
  for(let i=1; i<nbChar;i++){
    if(input[i]===buf){
      count++
    }else{
      out += countNb(count, buf)
      count=1
      buf = input[i]
    }
  }
  out += countNb(count, buf)
  return out
};

export const decode = (str) => {
  let input = str.split("")
  let nbChar=input.length

  if(nbChar===0) return '';
  let out=""
  let nb = ''
  for(let i=0; i<nbChar; i++){

    if(isNaN(parseInt(input[i]))){
      out+=input[i].repeat(nb ? nb : 1)
      nb=''
    }else{
      nb += input[i]
    }
  }
  return out
};
