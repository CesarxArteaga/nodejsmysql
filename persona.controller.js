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

router.get('/personas/:id?', function(req, res, next){
        if(req.params.id){
            persona_model.getById(req.params.id, function(err, rows){
                if(err){
                    res.json(err)
                }else{
                    res.json(rows);
                    console.log('get persona by ID success')
                }
            })
        }
})


router.post('/personas', function(req, res, next){
    persona_model.create(req.body, function(err, result){
        if(err){
            res.send(err)
        }else{
            if(result.affectedRows > 0){
                res.send({error:false, message: "persona creada"})
                console.log("persona creada")
            }
        }
    })
})

router.put("/personas/:id?", function (req, res, next) {
    persona_model.update(req.params.id, req.body, function(err, rows){
        if(err){
            res.json(err)
        }else{
            res.json(rows)
        }
    })
})


router.delete('/personas/:id?', function(req,res, next){
    persona_model.delete(req.params.id, function(err, count){
        if(err){
            res.send(err)
        }else{
            res.send(count)
            console.log("delete persona")
        }
    })
})

module.exports = router;