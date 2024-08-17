//approach using builtin promise
//Promise-based
// 2 uses Promise-based functions.
// Error handling: Approach 2 has better error handling with built-in support for Promises, while Approach 1 requires more explicit error handling.

const {readFile, writeFile} = require('fs').promises
const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
  try{
    // const first = await readFilePromise('./content/first.txt', 'utf8')
    // const second = await readFilePromise('./content/second.txt', 'utf8')
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile('./content/node-native.txt', `This is async await function with ${first}, ${second}`, {flag : 'a'})
    console.log(first, second)
  }
  catch(err){
    console.log(err)
  }
}
start()