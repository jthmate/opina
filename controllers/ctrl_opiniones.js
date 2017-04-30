/* Incluye el modulo para las peticiones a base de datos. */
//----------------------------------------------------------

var db = require("../config/db_development");


/* Guarda la opinion en base de datos */
//--------------------------------------------------------------------------------------

var guardaOpinion = function (req, res) {
	
	res.send(JSON.stringify({ msg: "EL SERVER RESPONDE: OK! He recibido los datos" }));

	/*db.query('INSERT INTO opiniones SET ?', {

		// Datos grupo:
		op_fecha: req.query.fecha,
		op_voto: req.query.voto,
		op_comentario: req.query.comentario,
        
        objetos_ob_id: "1",
        
	}, function (err, result) {
		if (err) throw err;
        
		res.send(JSON.stringify({ msg: "EL SERVER RESPONDE: OK! He recibido los datos" }));
	});*/
    
};

exports.guardaOpinion = guardaOpinion;