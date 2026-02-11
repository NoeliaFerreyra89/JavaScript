
const precioPorDia = 100;

const diasInput = document.getElementById("dias");
const personasInput = document.getElementById("personas");
const boton = document.getElementById("calcularBtn");
const resultado = document.getElementById("resultado");
const historialLista = document.getElementById("historial");

let viajes = JSON.parse(localStorage.getItem("viajes")) || [];

function mostrarHistorial() {
    historialLista.innerHTML = "";
    viajes.forEach((viaje) => {
        const li = document.createElement("li");
        li.textContent = `${viaje.personas} personas - ${viaje.dias} días - $${viaje.total}`;
        historialLista.appendChild(li);
    });
}

boton.addEventListener("click", () => {
    const dias = parseInt(diasInput.value);
    const personas = parseInt(personasInput.value);

    if (isNaN(dias) || isNaN(personas)) {
        resultado.textContent = "Por favor ingresá números válidos";
        return;
    }

    const total = dias * personas * precioPorDia;

    const nuevoViaje = {
        dias,
        personas,
        total
    };

    viajes.push(nuevoViaje);
    localStorage.setItem("viajes", JSON.stringify(viajes));

    resultado.textContent = `El costo total del viaje es $${total}`;

    mostrarHistorial();
});

mostrarHistorial();

const botonBorrar = document.getElementById("borrarHistorial");

botonBorrar.addEventListener("click", () => {
    localStorage.removeItem("viajes"); 
    historial.innerHTML = ""; 
    
});
