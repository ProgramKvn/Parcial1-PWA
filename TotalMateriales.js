//Creación de Modulo
module.exports = (PrecioMaterial, SumaProyecto, callback) => {
	//Inicializando variables
	var Controlador = 0;
	SM = 0;
	//Recorriendo el 'array'
	for(var i = 0; i < PrecioMaterial.length; i++){
		//Callback con el mensaje de error
		if (PrecioMaterial[i]<1) {
			//Callback
			//Manejo de errores
			callback(new Error(
				"\nNo es posible trabajar los pagos con saldo negativo.\n" +
				"Por favor, verifique los datos ingresados."
				), null);
			//Interrumpiendo el 'if'
			break;
		}else if (PrecioMaterial[i] ){
			//Variable que permite realizar operaciones
			Controlador = 1;
		}
	}
	//Callback que contiene las operaciones a realizar
	if (Controlador == 1) {
		//Callback
		callback(null, {
			SumaMateriales: () =>
			(SM = SumaMaterial = PrecioMaterial.reduce((a, b)=> a + b, 0)),
			SumaTotal: ()=>
			(SumaProyecto + SumaMaterial),
			Holgura: () =>
			(Holgura = (SumaProyecto + SM) * 0.08)
		});
	}
}

