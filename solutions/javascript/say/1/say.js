//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const say = (n) => {
  if(n<0 || n>=1000000000000){
    throw new Error('Number must be between 0 and 999,999,999,999.')
  }
  const numbers = {
    0:"",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine",
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    14:"fourteen",
    15:"fifteen",
    16:"sixteen",
    17:"seventeen",
    18:"eighteen",
    19:"nineteen",
    20:"twenty",
    30:"thirty",
    40:"forty",
    50:"fifty",
    60:"sixty",
    70:"seventy",
    80:"eighty",
    90:"ninety",
    100:"hundred",
    1000:"thousand",
    1000000:"million",
    1000000000:"billion",
  };
  let str="", tmp="";
  const input = n.toString()
  if(n === 0)  return "zero"

  if(n>=10 && n<=20){
    return numbers[input]
  }

  input.split('').reverse().forEach((it, index)=>{

    if(index==0){
      str = numbers[it]
    }
      
    if([1, 4, 7, 10].includes(index)){
        if(it>0){ 
          str = `${numbers[it*10]}-${str}`
        }
    }
  
    if([2, 3, 5, 6, 8, 9, 11].includes(index)){
      if(it>0){
        if([5, 8, 11].includes(index)) index = 2

        tmp = `${numbers[it]} ${numbers[10**index]}`
        str = tmp+ (str.length>0 ? ' '+str : '')
      }
    }
  })
  return str
};
