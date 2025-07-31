/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
   if(timer===undefined){
     return 'You forgot to set the timer.'
   }else{
     return timer===0 ? 'Lasagna is done.' : 'Not done, please wait.'
   }
}
export function preparationTime(layers, timeByLayer=2) {

  return layers.length*timeByLayer
}
export function quantities(layers) {
  const noodles = layers.filter(it=>it==='noodles')
  const sauce = layers.filter(it=>it==='sauce')
  return {noodles:noodles.length*50, sauce:sauce.length*.2}
}
export function addSecretIngredient(friendsList, myList){
   myList.push(friendsList[friendsList.length-1])
}

export function scaleRecipe(recipe, portion){
  const res = {...recipe}
  for(let item in res){
     res[item]*=portion/2 
  }
  return res
}

