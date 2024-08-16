const {readFile, writeFile} = require('fs')
console.log('staeting')
readFile('./content/first.txt', 'utf8', (err, result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result;
    writeFile('./content/async-op.txt',`here are both ${first} and ${second}`, (err, result)=>{
      if(err){
        console.log(err)
        return;
      }
      console.log('done with this task')
  })

  })
  
})
console.log('Next task waiting')