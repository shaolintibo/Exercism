//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (input, size) => {
  
  let res = new Array(size).fill('')
  let val=0
  let inc = -1
  for(let i=0; i<input.length; i++){
      if(i%(size-1)===0 ) inc = -inc;
  
      res[val] += input[i]
       val+=inc
  }
  return res.reduce((acc, it)=>acc+=it, '')
};

export const decode = (input, size) => {

  let inc = -1
  let val=0
  let res=new Array(size).fill(0)
  let i=0
  let letters=new Array(size).fill('')
  for( i=0;i<input.length;i++) {
      if(i%(size-1)===0 ) inc = -inc;

      res[val]++
      val+=inc
  }
  let start = 0
  for( i=0;i<res.length;i++) {

    start = start+(i>0 ? res[i-1]:0)
    letters[i] = input.substr(start, res[i])
  }
  let decoded = ''
  val = 0;
  inc=-1;
  for( i=0;i<input.length;i++) {
      if(i%(size-1)===0 ) inc = -inc;

      let tab=letters[val].split('')
      decoded+= tab.shift()
      letters[val]=tab.join('')
      val+=inc
  }
  return decoded
};
