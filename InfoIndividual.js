module.exports = (HorasEquipo, PrecioEquipo, callback) => {
	//Recorriendo el vector para encontrar el error
	for(var i = 0; i < HorasEquipo.length; i++){
		if(HorasEquipo[i] < 1 || PrecioEquipo[i] < 1 ){
			//Callback que regresa un error
			callback(new Error(
				"\nLa función sólo admite valores mayores a 0. \n" + 
				"Por favor, ingrese nuevamente los datos para \n" +
				"poder realizar el cálculo. \n"), 
			null);
		}
		else{
			//Callback que regresa operaciones
			callback(null, {
				ResultadoPaga: () => (HorasEquipo[i]*PrecioEquipo[i]),
				Contador: () => (i+1),
				InfoHoras: () => (HorasEquipo[i]),
				InfoPago: () => (PrecioEquipo[i])
			});
		}
	}
}