//
// This is only a SKELETON file for the 'Bottle Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const recite = (initialBottlesCount, takeDownCount) => {
  
  let count = initialBottlesCount;
  let verses=[]
  const numValues={0:"No", 1:"One",2:"Two",3:"Three",4:"Four",5:"Five",6:"Six",7:"Seven",8:"Eight",9:"Nine", 10:"Ten"}

  while(count>initialBottlesCount-takeDownCount) {
    if(verses.length>1) verses.push(``);

    const verse = `${numValues[count]} green bottle${count>1?'s':''} hanging on the wall,`
    verses.push(verse)
    verses.push(verse)
    verses.push(`And if one green bottle should accidentally fall,`)
    verses.push(`There'll be ${numValues[count-1].toLowerCase()} green bottle${count-1!==1?'s':''} hanging on the wall.`)
    count--
  }
  return verses
    
};
