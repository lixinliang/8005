'use strict'

const http = require('http')
const micro = require('micro')

const app = micro.serve(async (req) => {
  console.log('')
  console.log(req['url'])
  console.log(req['headers']['user-agent'])
  return 'hello world'
})

const server = new http.Server(app);

server.listen(8005)

console.log('server is running on "http://localhost:8005/"')
