const express = require('express');
const router = express.Router();
const person = require('./persona.controller');


router.get('/person', person.all);
router.post('/person', person.create);
router.get('/person/:person_id', person.byId);
router.put('/person/:person_id', person.update);
router.delete('/person/:person_id', person.delete);



module.exports = router;
