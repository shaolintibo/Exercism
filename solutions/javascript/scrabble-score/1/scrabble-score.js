//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const values = {
1:['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
2:['D', 'G'],
3:['B', 'C', 'M', 'P'],
4:['F', 'H', 'V', 'W', 'Y'],
5:['K'],
8:['J', 'X'],
10:['Q', 'Z']
}
export const score = (word) => {
   return [...word].reduce((acc, letter)=>{

     for(let points in values){
       if(values[points].includes(letter.toUpperCase())){
         return acc+=parseInt(points)
       }
     }
   }, 0)
};
