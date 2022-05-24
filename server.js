const http = require('hhtp')

const server = http.createServer( (req, res) => {
    console.log('request made')
})