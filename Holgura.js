module.exports.Holgura = (Total)=>{
	Holgura = (Total * 0.08);
	//Redondeando el valor de Holgura a 2 decimales
	var NuevoHolgura = Holgura.toFixed(2);
	return NuevoHolgura;
}