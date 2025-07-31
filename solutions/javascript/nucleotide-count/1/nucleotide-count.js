//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  let nucleotides = {'A': 0, 'C': 0, 'G': 0, 'T': 0}
  const otherChars = strand.match(/[^G|T|A|C]/)
  if(otherChars!==null){
    throw new Error('Invalid nucleotide in strand')
  }
  strand.split('').forEach(it =>nucleotides[it]++)
  return Object.values(nucleotides).join(' ')
}
