//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (letter) => {
  const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const ABCTab = [...abc]
  const pos = abc.indexOf(letter);
  let res = [];
 
  if(pos===0){
    return [letter]
  }else{
    const startPos = pos
    let resTmp = []
    for(let i = 0; i<=pos; i++){
        resTmp[i]= (`${' '.repeat(pos-i)}${ABCTab[i]}`).padEnd(pos+1,' ')
        const tmp = [...resTmp[i]]
        tmp.reverse().shift()
        resTmp[i]+= tmp.join('')
    }  
    res = [...resTmp]
    resTmp.pop()
    res = [...res, ...resTmp.reverse()]
  }
  console.log( res)
  return res
};
