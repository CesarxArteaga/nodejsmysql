var express = require('express');
var bodyparser = require('body-parser')
var controller = require('./persona.controller')

var app = express()
/*
app.use(bodyparser)
app.use(bodyparser.urlencoded({extended:true}))*/
/*
app.use(express.json)
app.use(bodyparser.urlencoded({extended:true}))*/


app.use(controller)

app.get('/', (req, res) =>{
    res.send("welcome bitch");
} )

app.listen(8000,function() {
    console.log('Listening on port 3000…')})

