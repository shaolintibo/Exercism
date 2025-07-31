//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const createUser = (name)=>{
  return {
    name,
    owes: {},
    owed_by: {},
    balance: 0,
  }
}
export class RestAPI {
  constructor(data) {
    this.users = data.users
  }

  get(url) {
      const fullUrl = new URL(url, "http://localhost")
      switch(fullUrl.pathname){
        case '/users':
          const requestedUsers = fullUrl.searchParams.get('users')?.split(',')
          let users=this.users
          if(requestedUsers){
            users= this.users.filter(it=>requestedUsers.includes(it.name))
          }
          return {users}
      }
  }
  /**
  @type {'lender', 'borrower'}
  @name of borrower if is lender type, or lender's name if is borrower type
  @index id of current user
  @amount the amount lent/borrow
  */
  updateLenderBorrower(type, name, index, amount){
    const isLender = type==='lender'
    const user = this.users[index]
    user.balance += isLender ? amount : -amount
    const owes_or_owed_by = isLender ? 'owes' : 'owed_by'
    const owed_by_owes = isLender ? 'owed_by' : 'owes'
    const amountTotal = user[owes_or_owed_by][name]
    let remainingAmount=amount
    if(user[owes_or_owed_by][name]){
      remainingAmount = amount-user[owes_or_owed_by][name]
      if(remainingAmount<0){
        user[owes_or_owed_by][name]-=amount
      }else{
        delete user[owes_or_owed_by][name] 
      }
    }
    if(remainingAmount>0){
      user[owed_by_owes][name]=remainingAmount
    }
  }
  post(url, payload) {
    switch(url){
      case '/add':
        const newUser = createUser(payload.user)
        this.users = [...this.users, newUser]
        return newUser
      //.sort((a,b)=>a.localeCompare(b))
      break;
      case '/iou':
        const {lender, borrower, amount} = payload
        this.users.forEach(({name, owes, owed_by, balance}, index)=>{
          
          if(name===lender){
            this.updateLenderBorrower("lender", borrower, index, amount)
          }
          if(name===borrower){
             this.updateLenderBorrower("borrower", lender, index, amount)
          }
        })

        const users=this.users.filter(it=>it.name===lender||it.name===borrower)
        return {users}
      break;
    } 
  }
}
