const http = require('http')
const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    res.end('This is a webapp made by node js')
    return
  }
  if(req.url === '/about'){
    res.end('This is a about page')
    return
  }
  res.end(`
    <h1> Oops!</h1>
    <p> This page is not available</p>
    <a href = "/">Back Home</a>
    `)
})
server.listen(5000);

// returns the count after each reload of browser*************************************************

// const http = require('http')
// let requestCount = 0;
// const server = http.createServer((req, res)=>{
//   console.log("request event")
//   requestCount++;
//   console.log(`Request count : ${requestCount}`)
//   res.end("Ended the response")
// })
// server.listen(5000, ()=>{
//   console.log('Server is listening on port number 5000...')
// })





// same reload count using event driven ************************************************ 14{}.js concept using emitter.on and .emit event

// const http = require('http')
// let requestCount = 0;
// const server = http.createServer((req, res)=>{
//   console.log("request event")
//   requestCount++;
//   console.log(`Request count : ${requestCount}`)
//   res.end("Ended the response")
// })
// server.listen(5000, ()=>{
//   console.log('Server is listening on port number 5000...')
// })
