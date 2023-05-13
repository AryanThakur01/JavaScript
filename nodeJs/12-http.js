const http = require('http')

/*
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home Page');
    }
    if (req.url == '/about') {
        res.end('Hey there! this is me');
    }
    res.end(`
<h1>Oops</h1>
<a href="/">Go to home</a>
    `)
})

** ERROR OCCURED IS THIS ONE: Error [ERR_STREAM_WRITE_AFTER_END]: write after end

*/
// TO CHECK ERROR IN THESE LINES GO TO { https://stackoverflow.com/questions/60714212/error-err-stream-write-after-end-write-after-end }


const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home Page');
    }
    else if (req.url == '/about') {
        res.end('Hey there! this is me');
    } else {
        res.end(`
<h1>Oops</h1>
<a href="/">Go to home</a>
    `)
    }
})


// server.listen(20);
/*
Do remember that you need super user privileges to run your server on port below 1024 (generally) so try to use higher ports; like 2000, 4000, 5000
*/

server.listen(5000);