//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const numbers = {
  ' _ | ||_|   ':"0",
  '     |  |   ':"1",
  ' _  _||_    ':"2",
  ' _  _| _|   ':"3",
  '   |_|  |   ':"4",
  ' _ |_  _|   ':"5",
  ' _ |_ |_|   ':"6",
  ' _   |  |   ':"7",
  ' _ |_||_|   ':"8",
  ' _ |_| _|   ':"9"
}

export const convert = (grid) => {
  const charLength = 12,
        charWidth = 3,
        charHeight = 4;
  const data = grid.split('\n')
  const columnNb = data[0].split('').length
  const rowNb = data.length
  const subColNb = columnNb/charWidth
  const subRowNb = rowNb/charHeight

  let foundNb = ""
  
  for(let l=0; l<subRowNb; l++) {
    for(let k=0; k<subColNb; k++) {
      for(let i=l*charHeight; i < (l*charHeight)+charHeight; i++) {
        const column = data[i].split('')
        for(let j=k*charWidth; j< (k*charWidth)+charWidth; j++) {
          foundNb+=column[j]
        }
      }
    }
  }

  let num = ''
  while(foundNb.length>=charLength){
    const character = numbers[foundNb.substring(0, charLength)]
    num += character ? character : "?"
    
    foundNb = foundNb.substring(charLength, foundNb.length)
    if(foundNb.length%(subColNb*charLength)===0 && subColNb>1 && foundNb.length>0){
      num += ','
    }
  }
  return num
};
