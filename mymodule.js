'use strict'

const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, ext, callback) {
    fs.readdir(dirPath, (error, files) => {
        if(error) return callback(error);
        const filteredData = files.filter(file => path.extname(file) === `.${ext}`);
        callback(null, filteredData);
    })
}