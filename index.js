//Creación de variables: Invocando a los módulos
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
			console.log("¡ADVERTENCIA! ", err.message);
			console.log("\n");
		}
		else{
			console.log("El precio total del proyecto es de: $" + VTotalProyecto);
			console.log("Precio total de los materiales es de $" + PT.SumaMateriales());
			console.log("Precio total: $" + PT.SumaTotal());
		}
	});
}

//Llamando las funciones y pasando parámetros

//Ejemplo de función con error
PrecioTotal([-20,20,30,40]);
//Ejemplo de función sin error
PrecioTotal([20,20,30,40]);