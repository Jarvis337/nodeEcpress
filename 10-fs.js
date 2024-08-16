
const {readFileSync, writeFileSync} = require('fs')
console.log("starting the process")
const first = readFileSync('./content/first.txt','utf8' )
const second = readFileSync('./content/second.txt', 'utf8')
// console.log(first, second)
writeFileSync('./content/third.txt', `Hii there this is Veronica and ${first} and ${second}`, {flag: 'a'})
console.log('done with this task')
console.log('next task aligning')