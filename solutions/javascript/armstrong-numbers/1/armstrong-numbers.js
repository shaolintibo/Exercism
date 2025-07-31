//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const str = num.toString();
  if(str.length<=1) return true
  const res = [...str].reduce((acc, item)=>{
    return acc+= Number(item)**str.length
  }, 0)
  return res===num
};
