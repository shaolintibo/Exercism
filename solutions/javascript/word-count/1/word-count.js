//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
  const s = sentence.toLowerCase().replace(/\n/gi, ' ').replace(/([^a-z0-9']|\B'|'\B)+/gi,' ').split(' ').sort((a,b)=>a.localeCompare(b)).filter(v=>v!=='')
  let res = {}
  s.forEach((v)=>{
    if(!res[v])res[v]=0
    res[v]+=1
  })
  return res
};
