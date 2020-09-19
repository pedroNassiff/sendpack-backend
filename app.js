const express = require('express')

const bodyParser = require('body-parser')

const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

//Route basic
app.get('/', (req, res) => {
    res.send('Welcome to API!')
})

module.exports = app