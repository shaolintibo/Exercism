//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const hasLetters = (/[A-Za-z]/gm).test(message)

  if(message.replace(/(\n|\r|\t|\s)/gm, '')==='') return 'Fine. Be that way!'
  
  if(message === message.toUpperCase() && hasLetters){
    if((/\?$/).test(message))
    {
        return "Calm down, I know what I'm doing!" 
    }
    return 'Whoa, chill out!'
  }

  if((/\?$/).test(message.trim())){
    return 'Sure.'
  }
  
  return "Whatever."
}
