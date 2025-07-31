//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (word) => {
  let keys={}
  for( let i in word){
    word[i].forEach((val, index)=>{
      keys[val.toLowerCase()]=parseInt(i)
    })
  }
  return keys
};
