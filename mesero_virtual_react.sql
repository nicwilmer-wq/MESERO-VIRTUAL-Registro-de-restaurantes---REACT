
-- Crear base de datos del panel de restaurantes
CREATE DATABASE mesero_virtual_restaurantes
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Seleccionar la base de datos
USE mesero_virtual_restaurantes;

-- Crear tabla de restaurantes
CREATE TABLE restaurantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo_comida VARCHAR(60) NOT NULL,
    descripcion TEXT,
    numero_contacto VARCHAR(20) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Consultar estructura
DESCRIBE restaurantes;

-- Consultar registros
SELECT * FROM restaurantes;
