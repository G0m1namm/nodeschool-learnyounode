'use strict'

const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const filterBy = '.' + process.argv[3];

fs.readdir(dirPath, (error, files) => {
    if(error) throw error;
    files.forEach((file) =>{
        if(path.extname(file) === filterBy){
            console.log(file);
        }
    })
})