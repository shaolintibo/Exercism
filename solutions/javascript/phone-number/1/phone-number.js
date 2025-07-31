//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (num) => {
  const containLetter = num.match(/[a-zA-Z]/g)!=null
  const containPonctuation = num.match(/[@:!]/g)!=null
  let formatedNum = num.replace(/[^\d]/g, "")//.substr(-11)

  if(containLetter){
    throw new Error('Letters not permitted')
  }

  if(containPonctuation){
    throw new Error('Punctuations not permitted')
  }

  if(formatedNum.length<10){
    throw new Error('Incorrect number of digits')
  }
  
  if(formatedNum.length>11 ){
    throw new Error('More than 11 digits')
  }
  
  if(formatedNum.length===11){
    if(formatedNum[0]!=="1" ){
      throw new Error('11 digits must start with 1')
    }
    formatedNum = formatedNum.substr(-10)
  }
  
  const code={"0": "zero", "1": "one"}
  const testNb = [0, 3]

  testNb.map((a)=>{
    if(parseInt(formatedNum[a])<2 ){
      throw new Error(`${a==0 ? "Area" : "Exchange" } code cannot start with ${code[formatedNum[a]]}`)
    }
  })
  return formatedNum
};
