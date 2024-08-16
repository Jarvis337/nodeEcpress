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