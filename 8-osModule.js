const os = require('os')
const user = os.userInfo()
console.log(user)

console.log(`System uptime is ${os.uptime()} seconds`)
console.log(os.arch())
const freeMemory = os.freemem()
console.log(`${freeMemory /1024/1024/1024} `);
console.log(os.type())