//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (values, limit) => {

  values = values.filter(item=>item!==0)
  const setRes = new Set();
  
  for(let i=0; i<values.length; i++){  
    let counter=1
    while(counter*values[i] < limit){
      setRes.add(counter*values[i])
      counter++
    }
  }
  const sum = setRes.size===0 ? 0 : [...setRes].reduce((acc, val)=>{
    return acc+=val
  }, 0)
  return sum;
};
