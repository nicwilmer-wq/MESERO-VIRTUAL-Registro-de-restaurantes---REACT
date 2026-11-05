
const express = require("express");
const cors = require("cors");
const db = require("./database");

// Importar las rutas de restaurantes
const restaurantesRoutes = require("./routes/restaurantes");

const app = express();

// Configuración del servidor
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.send("Servidor backend de Mesero Virtual funcionando correctamente");
});

// Conectar las rutas CRUD de restaurantes
app.use("/api/restaurantes", restaurantesRoutes);

// Ruta para comprobar la conexión con MySQL
app.get("/api/test-db", async (req, res) => {
    try {
        await db.query("SELECT 1");
        res.send("Conexión con MySQL exitosa");
    } catch (error) {
        console.error("Error de conexión:", error.message);
        res.status(500).send("No se pudo conectar con MySQL");
    }
});

// Puerto del servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
