//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour=0, min=0) {
    this.hour = hour
    this.min = min
  }

  toString() {
    let min = (this.hour%24*60+this.min)%(24*60)
    if(min<0)min=24*60+min
    return `${String(parseInt((min/60)%24)).padStart(2,0)}:${String(min%60).padStart(2,0)}`
  }

  plus(min) {
    this.min+=min
    return this.toString()
  }

  minus(min) {
    this.min-=min
    return this.toString()
  }

  equals(clock) {
    return clock.toString()===this.toString()
  }
}
