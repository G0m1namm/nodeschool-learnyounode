const net = require('net');
const strftime = require('strftime');

const date = strftime('%Y-%m-%d %H:%M');
const server = net.createServer((socket) => {
    socket.end(`${date}\n`)
})

server.listen(+process.argv[2])