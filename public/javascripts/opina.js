function guardaOpinion() {
    console.log("ENVIANDO LOS SIGUIENTES DATOS AL SERVER:\n\nFecha: "+$('#fecha').val()+"\nNick: "+$('#nick').val()+"\nObjeto: "+$('#objeto').val()+"\nVoto: "+$('#voto:checked').val()+"\nComentario: "+$('#comentario').val());
    
	$.ajax({
		url: "/guarda_opinion",
		data: {
			fecha: $('#fecha').val(),
            nick: $('#nick').val(),
            objeto: $('#objeto').val(),
            voto: $('#voto:checked').val(),
            comentario: $('#comentario').val(),
		},
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		type: "get"
	}).done(function (resultado) {
		console.log(resultado.msg);
	}).fail(function (jqXHR, textStatus, errorThrown) {
		console.log("Algo ha ido mal...");
	}).always(function () {
		console.log("Peticion completada");
	});
};