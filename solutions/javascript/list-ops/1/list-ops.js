//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(...values) {
    this.values = values.flat()
  }

  append(list) {
    return new List([...this.values, ...list.values])
  }

  concat(listOfLists) {
    let res = [...this.values]
    listOfLists.values.forEach(v=>{
      res = [...res, ...v.values]
    })
    return new List(...res)
  }

  filter(filterFunc) {
    return new List(...this.values.filter(filterFunc))
  }

  map(mapFunc) {
      return new List(...this.values.map(mapFunc))
  }

  length() {
    return this.values.length
  }

  foldl(func, acc) {
    return this.values.reduce(func, acc)
  }

  foldr(func, acc) {
    return this.values.reverse().reduce(func, acc)
  }

  reverse() {
    return new List(this.values.reverse())
  }
}
