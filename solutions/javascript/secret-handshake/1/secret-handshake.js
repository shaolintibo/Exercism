//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (cmdStr) => {
  
  const cmds = [...Number(cmdStr).toString(2)].reverse()
  let finalCode=''
  const ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump'];
  const sep = ', '
  
  cmds.forEach((v, id)=>{
    if(v==='1'){
      finalCode = finalCode.length>0 && id<4 ? finalCode+=sep : finalCode 
      if(id===4){
        finalCode = finalCode.split(sep).reverse().join(sep)  
      }else{
        finalCode += ACTIONS[id];
      }
    }
  })
  return finalCode.split(sep).filter(v=>v);
};
