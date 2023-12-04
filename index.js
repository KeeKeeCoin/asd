const express = require('express');
const app = express();
const port = 1678;

app.get('/',(req,res) => {
    res.send('hello!');
});

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`);
});