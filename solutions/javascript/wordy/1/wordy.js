//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isValidCommand = (command) => {
  const validCommands = new RegExp(/(plus|minus|multiplied by|divided by)/g);
  const extractedCmd = command.match(validCommands)||[]
  return extractedCmd.length>0
}

export const answer = (input) => {

  const starter="What is"

  if(input.startsWith(starter)){
      input=input.substring(starter.length, input.length-1)
      
      const action = input.replaceAll(/^(What is )|\?$/g, '')
      var regexpOp = new RegExp(/[-*\d]/g);
      const ops = action.split(regexpOp).map(a=>a.trim()).filter(a=>a!='')
      var  regNum = new RegExp(/ plus | minus | multiplied by | divided by/g);
      const nums = action.split(regNum).map(a=>parseInt(a)).filter(a=>(a!=''&&!Number.isNaN(a)))
   
    //parse missformed number
    var doublon = new RegExp(/-?[\d] -?[\d]+/g);
    var doublonVal= (action.match(doublon)||[])
    
    if(nums.length==0 || doublonVal.length>0){
      throw new Error("Syntax error")
    }

    let sum = parseInt(nums.shift())
    
    while(ops.length>0){
      const currentCmd = ops.shift()
      const val = parseInt(nums.shift())
      console.log(`currentCmd: ${currentCmd} val: ${val}`)
      
      if(!isValidCommand(currentCmd)){
        throw new Error("Unknown operation")
      }
      if(Number.isNaN(val)){
        throw new Error("Syntax error")
      }
      switch(currentCmd){
        case "plus":
           sum+=val
          break;
        case "minus":
          sum-=val
          break;
        case "multiplied by":
          sum*=val
          break;
        case "divided by":
          sum/=val
          break;
      }
    }
    return sum
  }else{
    //throw new Error("Non-math questions")
    throw new Error("Unknown operation")
  }
};
