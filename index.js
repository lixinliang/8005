'use strict'

const micro = require('micro')

const server = micro(async (req) => {
  console.log('')
  console.log(req['url'])
  console.log(req['headers']['user-agent'])
  return 'hello world'
})

server.listen(8005)

console.log('server is running on "http://localhost:8005/"')
