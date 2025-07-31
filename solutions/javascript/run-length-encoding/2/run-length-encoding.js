//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str) => {
   return str.replace(/(.)\1+/g, (chunk, char) => chunk.length + char);
};

export function decode(str) {
  return str.replace(/(\d+)(.)/g, (pair, count, char) => char.repeat(count));
};
