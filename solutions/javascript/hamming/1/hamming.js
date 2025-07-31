//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (input1, input2) => {
  if(input1.length!==input2.length)
    throw new Error('strands must be of equal length')
  
  const input2Tab = [...input2];
  const count = [...input1].reduce((acc, val, index)=> acc+= val!==input2Tab[index] ? 1 : 0, 0)
  return count
};
