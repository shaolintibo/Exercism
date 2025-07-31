//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
 const mapping = [
      ['Methionine', ['AUG']],
      ['Phenylalanine', ['UUU', 'UUC']],
      ['Leucine', ['UUA', 'UUG']],
      ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
      ['Tyrosine', ['UAU', 'UAC']],
      ['Cysteine', ['UGU', 'UGC']],
      ['Tryptophan', ['UGG']],
    ];
const stops = ['UAA', 'UAG', 'UGA']
export const translate = (str) => {
  

 // console.log("str: ", str)
  
  let translation = []

  if(str){
    //create group of three, filtered without ''
    let datas = str.split(/(.{3})/).filter(a=>a!=='')
    let validStopIndex=-1

    //search first stop indeox
    datas.forEach((it, id)=>{
       if(validStopIndex!==-1) return
        if(stops.indexOf(it)>=0) validStopIndex = id
    })
    
    //keep only RNA before stop
    if(validStopIndex>=0){
      datas = datas.slice(0, validStopIndex)
    }

    //search RNA correspondance
    datas.map(val=>{

        let RNAPos = -1
        mapping.forEach((it, id)=>{
          if(RNAPos!==-1) return
          
          RNAPos = it[1].indexOf(val)

          //RNA found
          if(RNAPos>=0) translation.push(it[0])            

        })
        //no correspondance
        if(RNAPos===-1){
          throw new Error('Invalid codon')
        }
      })
  }
  return translation
};
