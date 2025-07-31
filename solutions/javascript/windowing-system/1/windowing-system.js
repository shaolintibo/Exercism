// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(w=80, h=60){
  this.width=w
  this.height=h
}

Size.prototype.resize = function(w, h){
  this.width=w;
  this.height=h;
}

/*export class Size{
  constructor(w=80, h=60){
    this.width=w
    this.height=h
  }
  resize = function(w, h){
    this.width=w;
    this.height=h;
  }
}*/
export function Position(x=0, y=0){
  this.x = x
  this.y = y
}

Position.prototype.move = function (x, y){
  this.x = x
  this.y = y
}

export class ProgramWindow{
  constructor(){
    
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }
  set x(value){
    this.x = value
  }
  set y(value){
    this.y = value
  }
  resize(size){
    this.size.width = Math.max(Math.min(size.width,this.screenSize.width-this.position.x), 1)
    this.size.height = Math.max(Math.min(size.height,this.screenSize.height-this.position.y), 1)
  }
  move(position){
    this.position.x = Math.min(Math.max(0, position.x), this.screenSize.width-this.size.width)
    this.position.y = Math.min(Math.max(0, position.y), this.screenSize.height-this.size.height)
  }
}

export function changeWindow(programWindow){
  programWindow.move(new Position(100,150))
  programWindow.resize(new Size(400,300))
  return programWindow
}