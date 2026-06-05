const fs = require("fs");
const path = require("path");

// =====================================================
// CARGA DE BASE DE CONOCIMIENTO JESUS REY
// =====================================================

const rutaBase = path.resolve(
__dirname,
"../../../ia/base-conocimiento/jesus-rey-ai.md"
);

if (!fs.existsSync(rutaBase)) {
console.error("❌ No se encontró la base de conocimiento:");
console.error(rutaBase);
process.exit(1);
}

const base = fs.readFileSync(rutaBase, "utf8");

console.log("✅ Base cargada correctamente");
console.log("📚 Caracteres:", base.length);

// =====================================================
// MOTOR DE RESPUESTAS
// =====================================================

function responder(mensaje) {
mensaje = mensaje.toLowerCase();

if (mensaje.includes("casa")) {
return "Perfecto 👍 podemos diseñarte una casa a medida. ¿Tenés idea de tamaño o presupuesto?";
}

if (
mensaje.includes("precio") ||
mensaje.includes("costo") ||
mensaje.includes("valor") ||
mensaje.includes("presupuesto")
) {
return "El costo depende del sistema constructivo, la ubicación y los metros cuadrados. Te puedo preparar distintas opciones adaptadas a tu presupuesto.";
}

if (
mensaje.includes("terreno") ||
mensaje.includes("lote")
) {
return "No hay problema. Podemos diseñar tu proyecto incluso si todavía no tenés terreno definido.";
}

if (
mensaje.includes("steel frame") ||
mensaje.includes("steelframe")
) {
return "Trabajamos con Steel Frame utilizando perfiles galvanizados, aislaciones térmicas y terminaciones de primera calidad.";
}

if (
mensaje.includes("hormigon celular") ||
mensaje.includes("hormigón celular")
) {
return "El hormigón celular ofrece excelente aislación térmica, menor peso estructural y gran velocidad de construcción.";
}

if (
mensaje.includes("tiny house")
) {
return "Diseñamos Tiny Houses modernas, funcionales y personalizadas.";
}

if (
mensaje.includes("jesus rey") ||
mensaje.includes("empresa")
) {
return "JESUS REY Construcción y Desarrollo desarrolla proyectos tradicionales, Steel Frame, hormigón celular, sistemas industrializados y soluciones a medida.";
}

return "Contame un poco más sobre tu proyecto y te voy a asesorar para encontrar la mejor solución constructiva 👍";
}

module.exports = { responder };
