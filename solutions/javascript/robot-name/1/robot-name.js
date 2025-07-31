// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor(){

    this._name = Robot.releaseNames()
  }
  
  
  reset = () => {
    this._name = Robot.releaseNames()
  }

  get name () {
    return this._name
  }
}

Robot.randomName = () =>{
    const rand = (step)=>parseInt(Math.random()*step)
    const num = [...Array(10)].map((a,index)=>(index).toString(36))
    const abc = [...Array(26)].map((a,index)=>(index+10).toString(36).toUpperCase())

    const letter1 = abc[rand(26)]
    const letter2 = abc[rand(26)]
    const num1 = num[rand(10)]
    const num2 = num[rand(10)]
    const num3 = num[rand(10)]
    return `${letter1}${letter2}${num1}${num2}${num3}`
  }
Robot.existingNames = []
Robot.releaseNames = () => {
    let name = ''
    let existNamesLength = Robot.existingNames.length
    
  while(Robot.existingNames.length===existNamesLength){
        name = Robot.randomName()
    
        if(Robot.existingNames.indexOf(name)===-1){
          Robot.existingNames.push(name)
        }
    }
    return name
}


