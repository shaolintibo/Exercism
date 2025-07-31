//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const sentences = [
  "twelve Drummers Drumming",
  "eleven Pipers Piping",
  "ten Lords-a-Leaping",
  "nine Ladies Dancing",
  "eight Maids-a-Milking",
  "seven Swans-a-Swimming",
  "six Geese-a-Laying",
  "five Gold Rings",
  "four Calling Birds",
  "three French Hens",
  "two Turtle Doves",
  "a Partridge in a Pear Tree"
]

const ordinals = [
  "first", "second", "third", "fourth",
  "fifth", "sixth", "seventh", "eighth",
  "ninth", "tenth", "eleventh", "twelfth"
]

export const recite = (start, end) => {
  
  end = end || start

  let res = ""
  for(let i=start; i <= end; i++){
    const subSentences = sentences.slice(sentences.length-i).reduce((acc, it, id, tab)=>{
        const len = tab.length;
            acc += `${(id===(len-1) && len!==1) ? 'and ':''}${it}${(id<(len-1)) ? ', ':''}` 
        return acc
    }, "")
  if(res!='') res+='\n'
  res += `On the ${ordinals[i-1]} day of Christmas my true love gave to me: ${subSentences}.\n`
  }
  return res;
  
};
