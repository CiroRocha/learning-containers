const http = require('http')

http
  .createServer( function(req, res) {
    console.log('request received')
    res.end('beep bop', 'utf-8')
  })
  .listen(3001)

console.log('server started');
