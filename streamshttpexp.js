var http = require('http')
var fs = require('fs')

// *** readFileSync transfers the file one time after read while createReadStram transfer files in chunks along with reading and without reading wole file hence for large files createREadStream is effective for memory

http.createServer(function(req, res){
// const text = fs.readFileSync('./content/big.txt', 'utf8')
// res.end(text)
const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
fileStream.on('open', ()=>{
fileStream.pipe(res)
})
fileStream.on('error', (err)=>{
  res.end(err)
})
})

.listen(5000)