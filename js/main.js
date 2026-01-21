
const precioPorDia = 20000;

function pedirDatos() {
    let dias = parseInt(prompt("¿Cuántos días viajas?"));
    let personas = parseInt(prompt("¿Cuántas personas viajan?"));

    if (isNaN(dias) || isNaN(personas)) {
        alert("Error: debés ingresar solo números");
        console.error("Datos inválidos");
        return {
            dias: 0,
            personas: 0
        };
    }

    return {
        dias: dias,
        personas: personas
    };
}

function calcularTotal(dias, personas) {
    let total = dias * personas * precioPorDia;
    return total;
}

function mostrarResultado(total) {
    if (total > 0) {
        alert("El costo total del viaje es: $" + total);
    } else {
        alert("No se pudo calcular el viaje");
    }
}

let datos = pedirDatos();
let totalViaje = calcularTotal(datos.dias, datos.personas);
mostrarResultado(totalViaje);

console.log("Días:", datos.dias);
console.log("Personas:", datos.personas);
console.log("Total:", totalViaje);
