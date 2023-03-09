'use strict'

const http = require('http');
const bl = require('bl');
const strftime = require('strftime');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const isoValue = url.searchParams.get('iso');
    const unixtime = new Date(isoValue).getTime();
    const hour = +strftime('%H', new Date(unixtime));
    const minute = +strftime('%M', new Date(unixtime));
    const second = +strftime('%S', new Date(unixtime));
    
    req.pipe(bl((err, data) => {
        if(err) res.writeHead(400, err);
        res.writeHead(200, { 'content-type': 'application/json' });
        if(url.pathname === '/api/parsetime') {
            res.write(JSON.stringify({
                hour,
                minute,
                second
            }))
        }
        if(url.pathname === '/api/unixtime') {
            res.write(JSON.stringify({
                unixtime
            }))
        }
        res.end();
    }))
})

server.listen(+process.argv[2])