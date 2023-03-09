'use strict'

const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', readFileCallback);

function readFileCallback(error, data) {
    if(error) return 'Error reading the file';
    console.log(data.split('\n').length - 1);
}
