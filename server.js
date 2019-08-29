const express = require('express');

const parrillas = require('./parrillas.json');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

const server = app.listen(7000, () =>{
    console.log(`Express running → PORT ${server.address().port}`);
})


app.get('/', (req, res) => {
    res.render("index", {
        title: "Homepage",
        parrillas: parrillas.profiles
    });
});



