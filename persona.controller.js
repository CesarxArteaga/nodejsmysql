var persona_model = require('./persona.model');
var express = require('express');
var router = express.Router();

router.get('/personas', function (req, res, next){
    persona_model.getAll(function(err, rows, next){
        if(err){
            res.json(err)
        }else{
            res.json(rows);
            console.log('get personas success')
        }
    })
})

module.exports = router;