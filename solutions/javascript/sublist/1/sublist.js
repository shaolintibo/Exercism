//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const arrIsEqual = (arr1, arr2) => {
  return JSON.stringify(arr2)===JSON.stringify(arr1)
}

const isSubPart = (arr1, arr2) => {
  if(arr1.length===0) return true
  if(arr2.length===0) return false

  for(let i=0; i<= arr2.length - arr1.length;i++){
      if(arrIsEqual(arr2.slice(i, arr1.length+i), arr1)) return true
    }

}

export class List {
  constructor(list) {
   this.data = list || []
  }

  compare(list) {
    if(arrIsEqual(this.data, list.data)) return 'EQUAL'  
    if(isSubPart(this.data, list.data)) return 'SUBLIST'
    if(isSubPart(list.data, this.data)) return 'SUPERLIST'

    return 'UNEQUAL'
  }
}
