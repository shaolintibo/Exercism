//
// This is only a SKELETON file for the 'Pythagorean Triplet' exercise. It's been provided as a
// convenience to get you started writing code faster.
//840, { maxFactor: 352, minFactor: 150 }

export function triplets({ maxFactor, minFactor=1, sum }) {

  if(!maxFactor){
    maxFactor = sum/2
  }

  
  let tripletsTab = [], ia=minFactor, ib=ia+1;
  while(ia<maxFactor && ia<ib)
  {
    ib=ia+1
    while(ib<maxFactor )
    {
        const c = sum-ia-ib 
        if(sum  === ia+ib+(ia**2+ib**2)**(1/2) && c<maxFactor){
          tripletsTab.push(new Triplet (ia, ib, c))
        }
      ib++
    }
    ia++;
  }
  return tripletsTab
}

class Triplet {
  constructor(a, b, c) {
    this.triplet = [a, b, c]
  }

  toArray() {
    return this.triplet
  }
}

