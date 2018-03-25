const fs = require('fs');

module.exports = (req, res) => {
    works = [];
    res.setHeader('Content-Type', 'application/json');
    fs.readdir('./data/works/', (err, files) => {
        files.forEach((filename) => {
            works.push(filename.substring(0, filename.length - 4));
        });
        res.send(works);
    });
};