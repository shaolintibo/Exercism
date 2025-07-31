/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let pizzaPrice=0;
  switch(pizza){
    case 'Margherita': 
        pizzaPrice=7;
      break;
    case 'Caprese': 
        pizzaPrice=9
      break;
    case 'Formaggio': 
        pizzaPrice=10
      break;
  }
  return pizzaPrice+extras.flat().reduce((acc, it)=>{
    return acc+= it==='ExtraToppings' ? 2 : 1
  }, 0)
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {

  return JSON.parse(JSON.stringify(pizzaOrders)).reduce((acc, {pizza, extras})=>{
    return acc+= pizzaPrice(pizza, extras)
  }, 0)
}
