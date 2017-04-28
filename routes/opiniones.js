var express = require('express');
var router = express.Router();
var ctrlOpiniones = require('../controllers/ctrl_opiniones.js');

/* Llama la funcion que guarda la opinion en base de datos. */
router.get('/guarda_opinion', ctrlOpiniones.guardaOpinion);

module.exports = router;