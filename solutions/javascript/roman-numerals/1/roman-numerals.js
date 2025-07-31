//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRoman = (input) => {
  const romansSymbols = [ "M", "D", "C", "L", "X", "V", "I"]
  const symbolsNb = romansSymbols.length
  const code = [...String(input).padStart(4, '0')]
  let romanRes = ""
  
  for(let index=0; index < code.length; index++)
  {
    const subIndex = symbolsNb - (7-index*2)
    const currentVal = parseInt(code[index])

    if(index==0){
      romanRes += String(romansSymbols[subIndex]).repeat(currentVal)
      
    }else if(index >=1 && index<=3){
      
      if(currentVal>= 1 && currentVal <=3 ){
        
        romanRes += String(romansSymbols[subIndex]).repeat(currentVal)

      } else if(currentVal>= 5 && currentVal <=8 ){
        
        romanRes+= romansSymbols[subIndex-1]
        romanRes+= String(romansSymbols[subIndex]).repeat(currentVal%5)
        
      }else if(currentVal==4 || currentVal==9 ){
        
        romanRes+= romansSymbols[subIndex]+romansSymbols[subIndex-(1+currentVal%4)]
      }
    }
  }
  return romanRes
};