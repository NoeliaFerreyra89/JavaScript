const precioPorDia = 100;

const diasInput = document.getElementById("dias");
const personasInput = document.getElementById("personas");
const boton = document.getElementById("calcularBtn");
const resultado = document.getElementById("resultado");
const historialLista = document.getElementById("historial");
const botonBorrar = document.getElementById("borrarHistorial");

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
    const dias = Number(diasInput.value);
    const personas = Number(personasInput.value);

    if (
        !Number.isInteger(dias) ||
        !Number.isInteger(personas) ||
        dias <= 0 ||
        personas <= 0
    ) {
        resultado.textContent = "Ingresá solo números enteros positivos";
        return;
    }

    // ✅ CÁLCULO CORRECTO
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

botonBorrar.addEventListener("click", () => {
    localStorage.removeItem("viajes");
    viajes = [];
    historialLista.innerHTML = "";
    resultado.textContent = "Historial borrado";
});

mostrarHistorial();
