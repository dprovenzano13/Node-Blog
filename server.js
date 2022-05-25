const http = require('http')

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method)

    // set header content type
    res.setHeader('Content-Type', 'text/html')
    // write the content we want to send to the browser
    res.write('<p>hello, world!</p>')
    res.write('<p>hello again, world!</p>')
    // end the res (response) which will send to the browser
    res.end()
})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})