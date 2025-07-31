//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sortLowerCase = (word) => {
  return [...word.toLowerCase()].sort((a,b)=> a.localeCompare(b)).join('')
}

export const findAnagrams = (word, words) => {
  const w = sortLowerCase(word)
  return words.filter(a=>{
    return sortLowerCase(a)===w && a.toLowerCase()!==word.toLowerCase()
  })  
};
