'use strict'

const { pipeline, Writable } = require('stream');
const http = require('http');
const bl = require('bl');

const urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
]

function makeRequest(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            res.pipe(bl((err, data) => {
                if(err) reject(err);
                resolve(data.toString());
            }))
        })
    })
}

async function queueRequests(urlList) {
    for (const url of urlList) {
        const requestStream = makeRequest(url);
        const writeStream = new Writable({
            write(chunk, encoding, callback){
                console.log(chunk.toString());
                callback();
            }
        })
        pipeline(requestStream, writeStream, (err) => {
            if(err) console.log(`Error procesing ${url}: ${err}`);
        })
    }
}

queueRequests(urls);


// Version without stream methods
/*
const results = []
let count = 0

function printResults () {
    for (let i = 0; i < 3; i++) {
    console.log(results[i])
    }
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
        return console.error(err)
        }

        results[index] = data.toString()
        count++

        if (count === 3) {
        printResults()
        }
    }))
    })
}

for (let i = 0; i < 3; i++) {
    httpGet(i)
} */