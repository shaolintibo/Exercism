//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {

  const len = input.length
  let expected= [...input]

  /////
  let inputTab=[]
  input.forEach((it,index)=>{
      inputTab[index] = it.split("").map(v=>v!=='*' ? 0 : v) 
  })
  const rowNb = inputTab.length
  let colNb = 0
  if(rowNb>0){
    colNb = inputTab[0].length

    for(let i=0; i<rowNb; i++){
      for(let j=0; j<colNb; j++){

        if(inputTab[i][j]!=='*' && colNb>1){
          /*if(j===0){

            inputTab[i][j] += inputTab[i][j+1] === '*' ? 1 : 0
          }
          if(j===colNb-1){
            inputTab[i][j] += inputTab[i][j-1] === '*' ? 1 : 0

          }
          if(j>0 && j<colNb-1){
            inputTab[i][j] += inputTab[i][j-1] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i][j+1] === '*' ? 1 : 0
          }*/
          inputTab[i][j] += (j>0 && inputTab[i][j-1] === '*') ? 1 : 0
          inputTab[i][j] += (j<colNb-1 && inputTab[i][j+1] === '*' )? 1 : 0
        }

        if(inputTab[i][j]!=='*' && rowNb>1){
          /*if(i===0){
            inputTab[i][j] += inputTab[i+1][j+1] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i+1][j] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i+1][j-1] === '*' ? 1 : 0            
          }
          if(i===rowNb-1){
            inputTab[i][j] += inputTab[i-1][j] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i-1][j-1] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i-1][j+1] === '*' ? 1 : 0
          }
          if(i>0 && i<rowNb-1){
            inputTab[i][j] += inputTab[i-1][j] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i+1][j] === '*' ? 1 : 0
            
            inputTab[i][j] += inputTab[i-1][j-1] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i-1][j+1] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i+1][j-1] === '*' ? 1 : 0
            inputTab[i][j] += inputTab[i+1][j+1] === '*' ? 1 : 0
          }*/

            inputTab[i][j] += (i>0 && inputTab[i-1][j] === '*') ? 1 : 0
            inputTab[i][j] += (i>0 && inputTab[i-1][j-1] === '*') ? 1 : 0
            inputTab[i][j] += (i>0 && inputTab[i-1][j+1] === '*') ? 1 : 0
            
            inputTab[i][j] += (i<rowNb-1 && inputTab[i+1][j] === '*') ? 1 : 0
            inputTab[i][j] += (i<rowNb-1 && inputTab[i+1][j-1] === '*') ? 1 : 0
            inputTab[i][j] += (i<rowNb-1 && inputTab[i+1][j+1] === '*') ? 1 : 0

        }
      }
    }
      /* if(j<colNb){
            cpt += inputTab[i][j+1] === '*' ? 1 : 0
            if(i<rowNb){
              cpt += inputTab[i-1][j-1] === '*' ? 1 : 0
            }
          }
          if(i>0){
            cpt += inputTab[i-1][j-1] === '*' ? 1 : 0
          }*/
        
  }
  
  

  let res = []
  inputTab.forEach((it,index)=>{
    res[index] = it.map((it)=>it==0 ? ' ':it).reduce((acc,it)=>acc+=it, '')
  })
  return res
};
