const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end('welcome');
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
server.on('response', (name, id) => {
    resizeBy.end('Welcome');
})

server.listen(5000, ()=>{
    console.log(`Server is running at port: ${5000}`)
});