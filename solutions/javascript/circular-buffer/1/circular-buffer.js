//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  constructor(length) {
    this.length = length
    this.clear()
  }

  write(value) {
    if(this.currentWrittenIndex>=this.length){
      throw new BufferFullError()
    }
    this.buffer[this.currentWrittenIndex] = value
    this.currentWrittenIndex++
  }

  read() {
    const val = this.buffer.shift()
    if(!val){
      throw new BufferEmptyError()
    }
    this.currentWrittenIndex--
    return val 
  }

  forceWrite(value) {
     if(this.currentWrittenIndex<this.length){
       this.write(value)
     }else{   
      this.buffer.shift();
      this.buffer.push(value)
     }
  }

  clear() {
    this.buffer = new Array(this.length)
    this.currentWrittenIndex = 0;
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor(message) {
    super(message);
    this.name = "BufferFullError";
  }
}

export class BufferEmptyError extends Error {
  constructor(message) {
    super(message);
    this.name = "BufferEmptyError";
  }
}
