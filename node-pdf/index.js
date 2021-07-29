const fs = require('fs');
const express = require('express');

let app = express();

app.get('/', (req,res) => {
    res.send("Hii");
})

app.get('/pdf', (req,res) => {
    var readStream = fs.createReadStream("Blog.pdf");
    readStream.pipe(res);
})

app.listen(3000);