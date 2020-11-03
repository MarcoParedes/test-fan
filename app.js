const express = require('express');
const path = require('path');
const app = express();


app.get('*', (req, res) => {
    // console.log('holaaa')
    // res.status(200).send({ text: 'Hola' });
    res.sendFile(path.join(__dirname + '/index.html'));
});

const port = process.env.PORT || 4500;
app.listen(port, () => {
    console.log(port)
});
