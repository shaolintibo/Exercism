//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export function clone(src){
  return JSON.parse(JSON.stringify(src))
}

export class GradeSchool {
  
  students = {}
  
  roster() {
    return clone(this.students);
  }

  initGrade(grade){
    if(!this.students[grade]) this.students[grade]=[]
  }
  
  add(name, grade) {
    for ( let i in this.students){
        this.students[i] = this.students[i].filter(v=>v!==name)
    }
    this.initGrade(grade)
    this.students[grade] = [...this.students[grade], name].sort((a,b)=>a.localeCompare(b))
  }

  grade(grade) {
    this.initGrade(grade)
    return clone(this.students[grade]);
  }
}
