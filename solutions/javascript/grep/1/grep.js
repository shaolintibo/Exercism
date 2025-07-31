#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  'n', // add line numbers
  'l', // print file names where pattern is found
  'i', // ignore case
  'v', // reverse files results
  'x', // match entire line
];

const ARGS = process.argv;
//console.log(ARGS)
//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.
//const [node, cmd, pattern, flags, files] = 
const argsNb = ARGS.length-1
let counter = ARGS.length-1

const isFileName = (str)=>{
  return (str.match(/data\/[\w-]*.txt/)||[]).length>0
}
let files = []
let flags = []
let pattern = ""
while(counter!==0){
  const params = ARGS[counter]
  //console.log('isfilename : ', isFileName(params), params)
  if(isFileName(params)){
    files.push(params)
  }
  if(counter>1){
    //console.log('params : ',params.startsWith('-'),params[1], params[1].includes(VALID_OPTIONS), params)
    if(params.startsWith('-')){
      const flag = params[1]
      if(VALID_OPTIONS.includes(flag)){
        flags.push(flag)
      }
    }else{
      pattern = params
    }
  }
  counter--
}
files = files.reverse()
//console.log( "pattern :", pattern, "flags: ", flags, "files:", files)
let res = [];
let regexpFlags = ''
if(flags.includes('i')) regexpFlags+='i'
/*const regex = new RegExp(`${flags.includes('v')?'^':''}${pattern}`, regexpFlags);
*/
const regex = new RegExp(`${pattern}`, regexpFlags);


files.forEach((fileName)=>{
  const lines = readLines(fileName);
  lines.forEach((line, lineIndex)=>{

    let str = '';
    
    if( (( line.match(regex)!==null ^ flags.includes('v') )  && !flags.includes('x')) || 
       
      ( (((line===pattern && !flags.includes('i')) ||
         (line.toLowerCase()===pattern.toLowerCase() && flags.includes('i'))) ^ flags.includes('v') ) && (flags.includes('x'))))
    {
      
      if(flags.includes('l')  ){  
        if(!res.includes(fileName)){
          str = fileName
        }
        
      }else{
        
        if(files.length>1){
          str = `${fileName}:`
        }        
        
        if(flags.includes('n')){
            str+=`${lineIndex+1}:`
        }
        
        str+=line
      }

      if(str){
        res.push(`${str}`)
      }
   }
  })
  
})
console.log(res.join('\n'))