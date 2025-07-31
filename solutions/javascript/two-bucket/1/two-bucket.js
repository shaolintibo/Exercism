//
// This is only a SKELETON file for the 'Two Bucket' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {

    if(goal>buckOne && goal>buckTwo) throw new Error("Is impossible")
    if(Math.abs(buckOne - buckTwo)%goal!==0 
       && buckOne!==goal && buckTwo!==goal) throw new Error("Not possible to reach the goal")
    //if(buckOne>goal && buckTwo>goal) throw new Error("Not possible to reach the goal")

    
    this.buckOne = buckOne
    this.buckTwo = buckTwo
    this.goal = goal
    this.starterBuck = starterBuck
    this.level = {'one':0, 'two':0}
    this.buckets = {'one':this.buckOne, 'two':this.buckTwo}

    this.finalBuck=null
  }
  
  fillBuck(buck){
    this.level[buck] = this.buckets[buck]
  }
  
  emptyBuck(buck){
    this.level[buck] = 0
  }
  
  moveBuck(currentBuck){
    const otherBuck = currentBuck==='one'? 'two' : 'one'
    let availableCapacity = this.buckets[otherBuck]-this.level[otherBuck]

    if(this.level[currentBuck]<=availableCapacity){
      this.level[otherBuck] += this.level[currentBuck]
      this.level[currentBuck] = 0
    }else{
      this.level[otherBuck] += availableCapacity
      this.level[currentBuck]-= availableCapacity
    }
  }
  
  goalAchieved(){
    for (let key in this.level){
      if(this.level[key]===this.goal) this.finalBuck=key
    }
    /*if( this.level['one'] === this.goal) this.finalBuck='one'
    if( this.level['two'] === this.goal) this.finalBuck='two'
    */
    return this.finalBuck!==null
  }
  
  isEmpty(buck){
    return this.level[buck]===0
  }
  isFull(buck){
    return this.level[buck] === this.buckets[buck]
  }
  solve() {
    
    let currentBuck = this.starterBuck
    let moves=0
    let otherBuck = currentBuck==='one'? 'two' : 'one'
  
    while( !this.goalAchieved()){
  
        //fill
        if(this.isEmpty(currentBuck)){
          this.fillBuck(currentBuck)
          moves++
          if(this.goalAchieved()) break;
        } 
  
        if(this.buckets[otherBuck] === this.goal ){
          this.fillBuck(otherBuck)
          moves++
          if(this.goalAchieved()) break;
        }
        
        this.moveBuck(currentBuck)
        moves++
        if(this.goalAchieved()) break;
  
        if(this.isFull(otherBuck)){
          this.emptyBuck(otherBuck)
          moves++
        }
      }
      
      return {
        moves,
        goalBucket: this.finalBuck,
        otherBucket: this.level[this.finalBuck==='one'? 'two' : 'one']
      }
  }
}
