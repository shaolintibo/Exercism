//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, desc , searchedDay) => {

  const nbOfDaysInMontht = new Date(year, month, 0).getDate()
  const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let lastDate = new Date()
  
  let count = 0

  for(let i = 1; i<nbOfDaysInMontht+1; i++)
  {
    const date = new Date(year, month-1, i)
    const day = days[date.getDay()]

    if(day === searchedDay){
      count++
    }
    switch(desc){
      case "first":
        if(count===1) return date
        break;
      case "second":
        if(count===2) return date
        break;
      case "third":
        if(count===3) return date
        break;
      case "fourth":
        if(count===4) return date
        break;
      case "last":
        if(day === searchedDay){
            lastDate = date
        }
        break;
      case "teenth":
         if(day === searchedDay &&
            date.getDate()>12){
            return date
         }
       break;
    }
  }
  if(desc === "last"){
    return lastDate
  }
};
