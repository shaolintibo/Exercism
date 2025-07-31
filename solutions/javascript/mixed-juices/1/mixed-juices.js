// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let delay = 2.5
  switch(name){
    case 'Pure Strawberry Joy':
      delay = 0.5
    break
    case 'Energizer':
    case 'Green Garden':
      delay = 1.5
    break
    case 'Tropical Island':
      delay = 3
    break
    case 'All or Nothing':
      delay = 5
    break
  }
  return delay
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

  if(wedgesNeeded===0 || limes.length===0) return 0;
  let wedgesNb = 0
  let counter= 0
  
  do{
    let wedgesByLime=0
    switch(limes[counter]){
      case 'small':
        wedgesByLime=6
        break;x
      case 'medium':
        wedgesByLime=8
        break;
      case 'large':
        wedgesByLime=10
        break;
    } 
    wedgesNb+=wedgesByLime
    counter++
//    console.log(wedgesNb, 'wedgesNeeded : ', wedgesNeeded, counter, 'wedgesNb<=wedgesNeeded:', wedgesNb<=wedgesNeeded)//, 'counter<limes.length-1:', `${counter}<${limes.length-1}`)
    
  }while(wedgesNb<=wedgesNeeded && counter<limes.length-1)
  return wedgesNb<=wedgesNeeded ? counter+1 : counter
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  while (timeLeft>0){
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift();
  }
  return orders;
}
