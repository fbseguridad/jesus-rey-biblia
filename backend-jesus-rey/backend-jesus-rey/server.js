const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

/*
========================
JESUS REY IA BACKEND
========================
Sistema de ventas + construcción + automatización
*/

// Ruta principal (estado del servidor)
app.get("/", (req, res) => {
  res.send("JESUS REY IA Backend funcionando 🚀");
});

// Importar cerebro de IA
const { responder } = require("./ia/cerebro");

// Endpoint principal de IA
app.post("/ia", (req, res) => {
  const mensaje = req.body.mensaje;

  if (!mensaje) {
    return res.json({
      respuesta: "Por favor envía un mensaje para poder ayudarte 👍"
    });
  }

  const respuesta = responder(mensaje);

  res.json({
    respuesta: respuesta
  });
});

/*
========================
FUTURO WHATSAPP BOT
========================
Aquí después conectamos:
- WhatsApp API
- clientes reales
- automatización de ventas
*/

// Iniciar servidor
app.listen(PORT, () => {
  console.log("===================================");
  console.log(" JESUS REY IA BACKEND ACTIVO 🚀");
  console.log(" http://localhost:" + PORT);
  console.log("===================================");
});
