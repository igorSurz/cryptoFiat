const express = require('express')
const bodyParser = require('body-parser')
const path = require("path");
const apiPort = 3000
const keys = require('./src/keys/keys')
const app = express();

app.use(express.static(path.join(__dirname,"/html")));

app.use(bodyParser.json())



const mongoose = require('mongoose')

mongoose
    .connect(keys.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

app.post('/signin', function (req, res) {
        res.send('success');
        
  })