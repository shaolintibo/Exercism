//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (datas) => {
  const columnsNb = datas.length
  let maxlinesNb=0

  datas.forEach(it=>{
      maxlinesNb = Math.max([...it].length, maxlinesNb)
  })
  let output = Array(maxlinesNb).fill("")

  for(let i=0; i<columnsNb;i++)
  {
      let item = [...datas[i]]
      output= output.map((v,j)=>v+=item[j]|| (columnsNb-1!=i ? ' ' : ''))
  }
  let n=0
  let lineCounter = maxlinesNb-1
  while(n<columnsNb-1 ){
    output[lineCounter]=output[lineCounter].trimRight()
    n=output[lineCounter].length
    lineCounter--
  }
  return output
};
