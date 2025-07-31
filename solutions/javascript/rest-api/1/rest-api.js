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
            this.users[index].balance+=amount

            let remainingAmount=-amount
            if(owes[borrower]){
              remainingAmount = owes[borrower]-amount
              if(remainingAmount>0){
                owes[borrower]-=amount
              }else{
                delete owes[borrower] 
              }
            }
            if(remainingAmount<0){
              owed_by[borrower]=-remainingAmount
            }
          }
          if(name===borrower){
            this.users[index].balance-=amount
            let remainingAmount=-amount
            if(owed_by[lender] ){
              remainingAmount = owed_by[lender] - amount
              if(remainingAmount>0){
                owed_by[lender] -= amount
              }else{
                delete owed_by[lender]
              }
            }
            if(remainingAmount<0){
              owes[lender]=-remainingAmount
            }
          }
        })

        const users=this.users.filter(it=>it.name===lender||it.name===borrower)
        return {users}
      break;
    } 
  }
}
