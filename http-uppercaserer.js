'use strict'

const http = require('http');
const map = require('through2-map');
const bl = require('bl');

const server = http.createServer((req, res) => {
    if(req.method === "POST") {
        req.pipe(map((chunk) => {
            return chunk.toString().toUpperCase();
        })).pipe(res)
    } else {
        res.end('Send me a POST request')
    }
})

server.listen(+process.argv[2])