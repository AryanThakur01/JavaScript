const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`Home Page`);
    }
    else if (req.url === '/about') {
        //BLOCKING CODE
        for (let i = 0; i < 1000; i++) {
            for(let j = 0; j< 1000; j++){
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page');
    }
    else {
        res.end(`
        <h1>Error Page</h1>
        <a href="/">Home</a>`);
    }
})

server.listen(5000, () => {
    console.log(`server is listening on port ${5000}`);
})