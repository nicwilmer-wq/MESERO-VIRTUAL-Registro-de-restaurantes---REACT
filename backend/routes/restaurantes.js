
const express = require("express");
const router = express.Router();

const db = require("../database");

// GET: consultar todos los restaurantes
router.get("/", async (req, res) => {
    try {
        const [restaurantes] = await db.query(
            "SELECT * FROM restaurantes ORDER BY id DESC"
        );

        res.json(restaurantes);

    } catch (error) {
        console.error("Error al consultar restaurantes:", error.message);
        res.status(500).json({
            mensaje: "Error al consultar restaurantes"
        });
    }
});

// POST: registrar un restaurante
router.post("/", async (req, res) => {
    try {
        const {
            nombre,
            tipo_comida,
            descripcion,
            numero_contacto
        } = req.body;

        if (!nombre || !tipo_comida || !numero_contacto) {
            return res.status(400).json({
                mensaje: "Nombre, tipo de comida y contacto son obligatorios"
            });
        }

        const [resultado] = await db.query(
            `INSERT INTO restaurantes
            (nombre, tipo_comida, descripcion, numero_contacto)
            VALUES (?, ?, ?, ?)`,
            [nombre, tipo_comida, descripcion || null, numero_contacto]
        );

        res.status(201).json({
            mensaje: "Restaurante registrado correctamente",
            id: resultado.insertId
        });

    } catch (error) {
        console.error("Error al registrar restaurante:", error.message);
        res.status(500).json({
            mensaje: "Error al registrar restaurante"
        });
    }
});

// PUT: actualizar un restaurante
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const {
            nombre,
            tipo_comida,
            descripcion,
            numero_contacto
        } = req.body;

        if (!nombre || !tipo_comida || !numero_contacto) {
            return res.status(400).json({
                mensaje: "Nombre, tipo de comida y contacto son obligatorios"
            });
        }

        const [resultado] = await db.query(
            `UPDATE restaurantes
            SET nombre = ?,
                tipo_comida = ?,
                descripcion = ?,
                numero_contacto = ?
            WHERE id = ?`,
            [nombre, tipo_comida, descripcion || null, numero_contacto, id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Restaurante no encontrado"
            });
        }

        res.json({
            mensaje: "Restaurante actualizado correctamente"
        });

    } catch (error) {
        console.error("Error al actualizar restaurante:", error.message);
        res.status(500).json({
            mensaje: "Error al actualizar restaurante"
        });
    }
});

// DELETE: eliminar un restaurante
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const [resultado] = await db.query(
            "DELETE FROM restaurantes WHERE id = ?",
            [id]
        );

        if (resultado.affectedRows === 0) {
            return res.status(404).json({
                mensaje: "Restaurante no encontrado"
            });
        }

        res.json({
            mensaje: "Restaurante eliminado correctamente"
        });

    } catch (error) {
        console.error("Error al eliminar restaurante:", error.message);
        res.status(500).json({
            mensaje: "Error al eliminar restaurante"
        });
    }
});

module.exports = router;
