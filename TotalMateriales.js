module.exports = (PrecioMaterial, SumaProyecto, callback) => {
	var Controlador = 0;
	for(var i = 0; i < PrecioMaterial.length; i++){
		if (PrecioMaterial[i]<1) {
			callback(new Error(
				"\nNo es posible trabajar los pagos con saldo negativo.\n" +
				"Por favor, verifique los datos ingresados."
				), null);
			break;
		}else if (PrecioMaterial[i] ) {}{
			Controlador = 1;
		}
	}	
	if (Controlador == 1) {
		callback(null, {
			SumaMateriales: () =>
			(SumaMaterial = PrecioMaterial.reduce((a, b)=> a + b, 0)),
			SumaTotal: ()=>
			(SumaProyecto + SumaMaterial)
		});
	}
}

