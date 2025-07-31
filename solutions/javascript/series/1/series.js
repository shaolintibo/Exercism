//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if( series.length===0){
      throw new Error('series cannot be empty')
    }
    this.series = series
  }

  slices(sliceLength) {
    if(sliceLength===0){
      throw new Error('slice length cannot be zero')
    }
    if(sliceLength<0){
      throw new Error("slice length cannot be negative")
    }
    if(sliceLength>this.series.length){
      throw new Error('slice length cannot be greater than series length')
    }
    const w = [...this.series]
    const len = w.length
    let out = []

    for(let i=0; i<len-sliceLength+1; i++){
      out.push( w.slice( i, i+sliceLength).map(a=>parseInt(a)) )
    }  
    return out
  }
}
