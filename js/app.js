// Función para obtener una opción del usuario
function obtenerOpcion(mensaje, opciones) {
  let mensajeOpciones = `${mensaje}\n${opciones.map((opcion, index) => `${index + 1}. ${opcion}`).join("\n")}`;
  let seleccion = prompt(mensajeOpciones);

  // Validar que se ingrese un número válido
  while (!/^\d+$/.test(seleccion) || seleccion < 1 || seleccion > opciones.length) {
    alert("Por favor, ingrese una opción válida.");
    seleccion = prompt(mensajeOpciones);
  }

  return opciones[seleccion - 1];
}

// Array de tipos de electrodomésticos
const tiposElectrodomesticos = [
  "Heladera",
  "Lavarropas",
  "Lavavajillas",
  "Lavasecarropas",
  "Microondas",
  "Hornos eléctricos",
  "Hornos a gas",
  "Freezer verticales"
];

// Array de marcas de electrodomésticos
const marcasElectrodomesticos = ["Samsung", "Whirlpool"];

// Array de objetos con fallas recurrentes
const fallasRecurrentes = [
  { tipo: "Heladera", fallas: ["No enfría", "Hace ruidos extraños", "Problema con la puerta", "Fuga de agua", "Descongelamiento excesivo"] },
  { tipo: "Lavarropas", fallas: ["No desagua", "No centrifuga", "Fuga de agua", "Ruidos al centrifugar", "Error en el panel"] },
  { tipo: "Lavavajillas", fallas: ["No lava bien", "No desagua correctamente", "Problema con la puerta", "Error en el panel", "Falta de brillo en la vajilla"] },
  { tipo: "Lavasecarropas", fallas: ["No seca", "Problema con la puerta", "Fuga de agua", "No gira el tambor", "Error en el panel"] },
  { tipo: "Microondas", fallas: ["No calienta", "Problema con la puerta", "Hace ruidos extraños", "Error en el panel", "No enciende la luz interior"] },
  { tipo: "Hornos eléctricos", fallas: ["No calienta", "Problema con la puerta", "Hace ruidos extraños", "Error en el panel", "Luces intermitentes"] },
  { tipo: "Hornos a gas", fallas: ["No enciende", "Problema con la puerta", "Hace ruidos extraños", "Error en el panel", "Problemas con la llama"] },
  { tipo: "Freezer verticales", fallas: ["No enfría", "Hace ruidos extraños", "Problema con la puerta", "Fuga de agua", "Descongelamiento excesivo"] }
];

// Objeto para almacenar la información del cliente
let cliente = {
  nombreApellido: prompt("Bienvenido/a a nuestro servicio de asistencia técnica. Por favor, ingrese su nombre y apellido:"),
  numeroCelular: prompt("Ingrese su número de celular:")
};

// Mensaje de bienvenida y explicación
alert(`Bienvenido/a, ${cliente.nombreApellido}.\n\n` +
  `Gracias por utilizar nuestro servicio de asistencia técnica. Por favor, proporcione la siguiente información sobre su electrodoméstico para que podamos brindarle la mejor ayuda posible.`);

// Obtener información del electrodoméstico
let tipoElectrodomestico = obtenerOpcion("Seleccione el tipo de electrodoméstico:", tiposElectrodomesticos);
let marcaElectrodomestico = obtenerOpcion(`Seleccione la marca del ${tipoElectrodomestico}:`, marcasElectrodomesticos);

// Filtrar las fallas disponibles para el tipo de electrodoméstico seleccionado
let fallasDisponibles = fallasRecurrentes.find(item => item.tipo === tipoElectrodomestico).fallas;

// Obtener la falla del usuario
let fallaElectrodomestico = obtenerOpcion(`Seleccione la falla del ${tipoElectrodomestico} ${marcaElectrodomestico}:`, fallasDisponibles);

// Mostrar información al usuario
alert(`Gracias, ${cliente.nombreApellido}.\n\n` +
  `Información del producto:\n` +
  `Tipo: ${tipoElectrodomestico}\n` +
  `Marca: ${marcaElectrodomestico}\n` +
  `Falla: ${fallaElectrodomestico}\n\n` +
  `Nos pondremos en contacto para más detalles.`);
