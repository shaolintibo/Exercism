//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {

  let shortIsbn = isbn.replace(/-/g,'').split("")
  const len = shortIsbn.length
  if(len!==10)return false;
  let tmp = shortIsbn.reduce(( acc, val, id)=>{
    let convVal = Number(val)
    if(val === 'X'){
      if( id === 9){
        convVal=10
      }else{
        return false
      }
    }
    return acc+=convVal*(len-id)
}, 0)
  return tmp % 11 == 0;
};
