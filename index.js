//Creación de variables: Invocando a los módulos
var InfoIndividual = require('./InfoIndividual');
var TotalProyecto = require('./TotalProyecto');
var TotalMateriales = require('./TotalMateriales');

//Creación de variables 'const' que almacenan el 'return' de módulos
const VTotalProyecto = TotalProyecto.TotalProyecto([2,2,2, 6], [10,20,40, 45]);

/*Creación de la función 'PrecioTotal'
Parámetros usados: 
M = Materiales
SP = SumaProyecto

PT = PrecioTotal
*/
function PrecioTotal(M, SP){
	TotalMateriales(M, VTotalProyecto, (err, PT)=>{
		if (err) {
			console.log(
				"MANEJO DE ERRORES\n" +
				"¡ADVERTENCIA! ", err.message);
			console.log("\n");
		}
		else{
			console.log(
				"TERCER PUNTO: TOTAL DEL PROYECTO\n" +
				"El precio total del proyecto es de: $" + VTotalProyecto);
			console.log(
				"\nSEGUNDO PUNTO: HOLGURA " + 
				"\nHolgura: $" + PT.Holgura());
			console.log("Precio total de los materiales es de $" + PT.SumaMateriales());
			console.log(
				"\nCUARTO PUNTO: COSTO TOTAL (MATERIALES Y PAGA DE PERSONAS)\n" +
				"Precio total (suma de los materiales y el coste del proyecto): $" + PT.SumaTotal());
		}
	});
}

//Controlador de menú
setTimeout(function(){
	console.log(
		"---------------------------------------------------------- \n" +
		"Información individual: \n" +
		"Datos individuales de sujetos ajenos a un proyecto \n" +
		"---------------------------------------------------------- \n");
}, 1000);

/*Creación de la función 'PagaEquipo'
Parámetros usados: 
HE = HorasEquipo
PE = PrecioEquipo

PaE = PagaEquipo
*/
function PagaEquipo(HE, PE){
	InfoIndividual(HE, PE, (err, PaE)=>{
		if (err) {
			console.log(
				"MANEJO DE ERRORES\n" +
				"¡ADVERTENCIA! ", err.message);
		}
		else{
			console.log(
				"El sujeto n° " + PaE.Contador() + ", que ha trabajado " + PaE.InfoHoras() + " horas," + 
				"\n" +  "cobrando $" + PaE.InfoPago() + " por hora; le corresponde una paga de: $" + PaE.ResultadoPaga() + "\n"
				);
		}
	});
}
//Llamando las funciones y pasando parámetros

//Ejemplo de función con error
PrecioTotal([-20,20,30,40]);
//Ejemplo de función sin error
PrecioTotal([20,20,30,40]);

//Ejemplo de función con y sin error
setTimeout(function(){
	PagaEquipo([-5, 10], [10, 20]);
}, 1000);


