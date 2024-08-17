// in eventloop synchronous code has high priority over async code in whole event loop
// below example represent
// the sequence for event loop is:

// first microtask queue => 1) nextTick queue 2) promise queue


// second timer queue(setTimout, setInterval,callbacks) => again go to microtask queue

// third i/o queue =>again go to microtask queue

// fourth check queue(setImmediate callbacks) =>again go to microtask queue

// fifth close queue(close handlers)=>again go to microtask queue

// at last it check in microtask queue and if all process are not executed it reloops and if executed then exits 


// const fs = require('fs')
// setTimeout(()=>{
//   console.log("timer queue")
// })
// fs.readFile(__filename, (err, data)=>{
//   console.log("i/o queue")
// })
// Promise.resolve().then(()=>{
//   console.log('Promise queue')
// })

// process.nextTick(()=>{
//   console.log("next tick queue")
// })

// setImmediate(()=>{
//   console.log("check queue")
// })

// const readableStream = fs.ReadStream(__filename);
// readableStream.close();
// readableStream.on("close", () =>{
//   console.log("Close queue")
// })


//difference b/w setTimeout and setInterval (timer queue(event loop))
// setInterval(()=>{
//   console.log("interval")
// }, 2000)


// setTimeout(()=>{
//   console.log("interval")
// }, 2000)
