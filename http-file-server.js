'use strict'

const http = require('http');
const fs = require('fs');
const bl = require('bl');

const portNumber = +process.argv[2],
    file = process.argv[3];

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(file, { encoding: "utf8" });
    stream.pipe(bl((err, data) => {
       if(err) res.writeHead(400, { 'content-type': 'text/plain' });
       res.writeHead(200, { 'content-type': 'text/plain' });
       res.end(data.toString());
    }))
})

server.listen(portNumber);