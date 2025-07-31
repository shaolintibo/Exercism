//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse']
const singlePhrases = [
  '',
  'It wriggled and jiggled and tickled inside her.',
  'How absurd to swallow a bird!',
  'Imagine that, to swallow a cat!',
  'What a hog, to swallow a dog!',
  'Just opened her throat and swallowed a goat!',
  "I don't know how she swallowed a cow!",
  "She's dead, of course!",
]

export class Song {

  verse(nb) {
    let vs = `I know an old lady who swallowed a ${animals[nb-1]}.\n`
    if(nb>1){
      vs += singlePhrases[nb-1]+"\n"
    }
    if(nb<8){
      
      if(nb>3 ){
        let count=0
        while(count<nb-3){
          
          vs += `She swallowed the ${animals[nb-1-count]} to catch the ${animals[nb-2-count]}.\n`
          count++
        }
      }
      
      if(nb>2 ){
        vs += 'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n'
      }
      if(nb>1){
        vs +='She swallowed the spider to catch the fly.\n'
      }
  
      vs += "I don't know why she swallowed the fly. Perhaps she'll die.\n"
    }    
    return vs
  }

  verses(start, end) {
    let res = ""
    for(let i=start; i<=end;i++){
      res+= this.verse(i)+'\n'
    }
    return res
  }
}
