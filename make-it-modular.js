const mymodule = require('./mymodule');

const folder = process.argv[2];
const ext = process.argv[3];

mymodule(folder, ext, (err, data) => {
    if(err) console.log(err);
    data.forEach(element => {
        console.log(element);
    });
})