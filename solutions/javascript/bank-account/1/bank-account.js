//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() { 
    this.currentOperation=undefined
  }
  
  open() {
    if(this.currentOperation!=undefined){
      throw new ValueError()
    }
    this.currentOperation = 0
  }

  close() {
    if(this.currentOperation==undefined){
      throw new ValueError()
    }
    this.currentOperation = undefined
  }

  deposit(amount) {
    if(this.currentOperation==undefined || amount<0){
      throw new ValueError()
    }
    this.currentOperation+=amount
  }

  withdraw(amount) {
    if(this.currentOperation==undefined || amount>this.currentOperation || amount<0){
      throw new ValueError()
    }
    this.currentOperation-=amount
  }

  get balance() {
    if(this.currentOperation==undefined){
      throw new ValueError()
    }
    return this.currentOperation
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
