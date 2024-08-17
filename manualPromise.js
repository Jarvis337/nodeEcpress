// use of promises to handle async code
// manual wrapping (promise creation)
// Callback-based:=Callback-based vs. Promise-based: Approach 1 uses callback-based functions, while Approach 
const {readFile, writeFile} = require('fs')
  const getText = (path)=>{
    return new Promise((resolve, reject) => {
      readFile(path, 'utf8', (err, data)=>{
        if(err){
          reject(err)
        }
        else{
          resolve(data)
        }
      })
      
    })
    }
    const writeText =(path, data)=>{
      return new Promise((resolve, reject)=>{
        writeFile(path, data, (err)=>{
          if(err){
            reject(err)
          }
          else{
            resolve('Successfully written')
          }
        })
      })
    }
  getText('./content/first.txt')
  .then(result => console.log(result))
  writeText('./content/boilercode.txt', 'Boiler Code freaking hell')
  .then(result => console.log(result))
  .catch(err => console.log(err))
  
