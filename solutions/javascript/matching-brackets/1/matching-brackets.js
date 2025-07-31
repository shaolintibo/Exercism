//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (phrase) => {
  console.log(phrase)
  
  let stack = []
  const validChars = ['(', '[', '{']
  const corresp={')': '(', ']': '[', '}': '{'}
  const datas = phrase.split("")
  for(let i =0; i<datas.length; i++){
    
    const char = datas[i]
    if(validChars.indexOf(char)>=0){
      stack.push(char);
    }else if(Object.keys(corresp).indexOf(char)>=0){
      if(stack.length==0) return false
      if(corresp[char]===stack[stack.length-1]){
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length===0
};
