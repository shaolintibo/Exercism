//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (str, rotation) => {
  console.log(str, rotation)
  
  const rotateLetter = (letterCode, rotation, minCode, maxCode) =>{
    let newCode = letterCode+rotation
    return newCode>maxCode ? newCode%maxCode+minCode-1 : newCode
  }
  
  return str.split("").map(letter=>{

    const code = letter.charCodeAt(0)
    let newCode = code
    
    if(code>=65 && code<=90){//65 90 upper
      newCode = rotateLetter(code, rotation, 65, 90)
    }else if(code>=97 && code<=122){//97 122 lower
      newCode = rotateLetter(code, rotation, 97, 122)
    }

    return String.fromCharCode(newCode)
  }).join("")
};
