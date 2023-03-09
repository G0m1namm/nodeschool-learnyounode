'use strict'

const fs = require('fs');

let filePath = process.argv[2];

let buffer = fs.readFileSync(filePath);
let bufferString = buffer.toString();
let numOfNewLines = bufferString.split('\n').length - 1;

console.log(numOfNewLines);