// event driven programming 14{}.js to......
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
  console.log('Data received')
})
customEmitter.emit('response')
