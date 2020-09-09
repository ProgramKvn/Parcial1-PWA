//Creación de Modulo
module.exports.TotalProyecto = (HorasEquipo, PrecioEquipo)=>{
	//Inicializando variables
	PagaIndividual = 0;
	PagaGrupal = 0;

	console.log("----------------------------------------------------------");
	console.log("Datos de proyecto: Información grupal");
	console.log("----------------------------------------------------------"+
			    "\nInformación del integrante\n" +
				"\nPRIMER PUNTO: MOSTRAR PRECIO DE UNA PERSONA EN EL PROYECTO");

	//Recorriendo el 'array'
	for(var i = 0; i < HorasEquipo.length; i++){
		PagaIndividual = HorasEquipo[i] * PrecioEquipo[i];
		console.log( 
			"\nHoras trabajadas: " + HorasEquipo[i] + 
			"\n Pago por hora: $" + PrecioEquipo[i] + "\n");	
		PagaGrupal += HorasEquipo[i] * PrecioEquipo[i]
	}
	return PagaGrupal;
}
