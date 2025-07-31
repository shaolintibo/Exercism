//
// This is only a SKELETON file for the 'Crypto Square' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Crypto {
  constructor(text2Crypt) {
    text2Crypt = text2Crypt.toLowerCase().replace(/[^a-z0-9]/g, '')
    let row=1, col=row;
    let cpt=0
    
    while( row*col< text2Crypt.length){
        if(cpt>1){ 
            col++
            cpt=0
        }
        if(cpt>0) row=col
        cpt++
    }
    
    text2Crypt = this.normalizeText(text2Crypt, col, row)
    this._ciphertext = text2Crypt
  }
  
  normalizeText(text, column, row) {

    text = text.trim(); 
    let finalTab = [...Array(row)].map(it=>'')

    const textLen = text.length
    
    if(textLen>0){
      const padLength = textLen%column!==0 ? textLen-textLen%column+column : column
      text = text.padEnd(padLength, " ")

      let tab=[]
      let str=""
      text.split('').forEach((it, index)=>{
        str+=it
        if(str.length===column ) {
            tab.push(str)
            str=''
        }
      })
     
      tab.forEach((it, index)=>{
        it.split("").forEach((letter, index)=>finalTab[index]+=letter)
      })
    }
    return finalTab.join(' ')
  }
  
  get ciphertext() {
    return this._ciphertext
  }
}
