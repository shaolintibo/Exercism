//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor(key) {
    if(key==undefined)
    { 
      key = [...Array(100)].map(a=> String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)).join("")
    }
    this._key = key
  }
  
  rotateLetter = (letterCode, rotation, minCode, maxCode) =>{
    let newCode = letterCode+(rotation%26)
    if(newCode>maxCode){
      newCode = newCode%maxCode+minCode-1
    }else if( newCode<minCode){
      newCode = maxCode - (minCode-1-newCode)%25
    }
    return newCode
  }
  _getValidKey(length){
    let key = this.key
    if(key.length<length){
       key=key.repeat(Math.ceil(length/key.length))
    }
    return key
  }
  encode(word) {
    const key = this._getValidKey(word.length)
    const encoded= word.split("").map((letter, index)=>{
      const rotate = key.charCodeAt(index)-97
      return String.fromCharCode(this.rotateLetter(letter.charCodeAt(0), rotate, 97, 122))
    }).join("")
    console.log('encoded:',encoded)
    return encoded
  }

  decode(word) {
    const key = this._getValidKey(word.length)
    return word.split("").map((letter, index)=>{
      const rotate = (key.charCodeAt(index)-97)
      return String.fromCharCode(this.rotateLetter(letter.charCodeAt(0), -rotate, 97, 122))
    }).join("")
  }

  get key() {
    return this._key
  }
}
