//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(list) {
    this._rows = list.split('\n').map(it=>it.split(' ').map(v=>Number(v)))
    this._columns = Array(this._rows[0].length).fill().map(v=>[])
    this._rows.forEach((row_val, row_id)=>{
        row_val.forEach((col_val, col_id)=>{
           this._columns[col_id][row_id]=col_val
        })  
    })
  }
  
  get rows() {
    return this._rows
  }

  get columns() {
    return this._columns
  }
}
