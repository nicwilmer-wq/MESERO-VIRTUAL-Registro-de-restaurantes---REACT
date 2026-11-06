# Módulo de Registro de Restaurantes – Mesero Virtual

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un módulo de registro y gestión de restaurantes que forma parte del sistema general **Mesero Virtual**, desarrollado como parte del proceso formativo del programa **Tecnólogo en Análisis y Desarrollo de Software** del SENA.

El propósito de este módulo es permitir el registro de establecimientos gastronómicos que posteriormente podrán vincularse al sistema Mesero Virtual.

La aplicación cuenta con una interfaz desarrollada en **React** y un backend construido con **Node.js** y **Express**, conectado a una base de datos **MySQL** para almacenar la información de los restaurantes de manera persistente.

## Alcance del módulo

Este componente se enfoca exclusivamente en la administración de la información básica de los restaurantes. No representa el sistema completo Mesero Virtual, sino una de sus partes funcionales.

## Tecnologías utilizadas

### Frontend
- React
- JavaScript
- HTML5
- CSS3
- Vite

### Backend
- Node.js
- Express
- API REST
- CORS
- dotenv

### Base de datos
- MySQL
- mysql2

## Funcionalidades

- Registrar nuevos restaurantes.
- Consultar los restaurantes registrados.
- Editar la información de los restaurantes.
- Eliminar restaurantes.
- Validar los datos ingresados en el formulario.
- Almacenar la información en una base de datos MySQL.
- Consultar la información almacenada mediante una API REST.

## Estructura del proyecto

La aplicación está organizada en dos componentes principales:

- **Frontend:** interfaz de usuario desarrollada en React.
- **Backend:** servidor desarrollado con Node.js y Express, encargado de gestionar las solicitudes y la conexión con MySQL.

## Requisitos previos

- [Node.js](https://nodejs.org/) y npm instalados.
- [MySQL](https://www.mysql.com/) instalado y funcionando.
- Visual Studio Code u otro editor de código.

## Instalación y ejecución

### 1. Configuración de la base de datos

Crear la base de datos y la tabla en MySQL:

```sql
CREATE DATABASE mesero_virtual_restaurantes
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE mesero_virtual_restaurantes;

CREATE TABLE restaurantes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo_comida VARCHAR(60) NOT NULL,
    descripcion TEXT,
    numero_contacto VARCHAR(20) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Configuración del backend

Ingresar a la carpeta `backend`:

```bash
cd backend
```

Instalar las dependencias:

```bash
npm install
```

Crear un archivo `.env` dentro de la carpeta `backend` y configurar los datos de conexión:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=TU_CONTRASEÑA
DB_NAME=mesero_virtual_restaurantes
DB_PORT=3306
```

**Importante:** no subas el archivo `.env` al repositorio. Asegúrate de incluirlo en el archivo `.gitignore`.

Iniciar el servidor:

```bash
node server.js
```

El backend se ejecuta en: http://localhost:3000

### 3. Configuración del frontend

Desde la carpeta principal del proyecto, instalar las dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npm run dev
```

Vite mostrará la dirección local para abrir la aplicación en el navegador, normalmente: http://localhost:5173

## API REST

El backend dispone de las siguientes operaciones:

| Método | Ruta                    | Descripción               |
|--------|-------------------------|---------------------------|
| GET    | `/api/restaurantes`     | Consultar restaurantes    |
| POST   | `/api/restaurantes`     | Registrar un restaurante  |
| PUT    | `/api/restaurantes/:id` | Actualizar un restaurante |
| DELETE | `/api/restaurantes/:id` | Eliminar un restaurante   |

## Almacenamiento de información

Los datos de los restaurantes se almacenan en una base de datos MySQL. El frontend se comunica con el backend mediante solicitudes HTTP a través de una API REST.

## Autores

Proyecto académico desarrollado como parte del programa **Tecnólogo en Análisis y Desarrollo de Software** del SENA.

**Integrantes:**
- Nixon Wilmer Chavez
- Youler Jose Cordoba

**Institución:** Servicio Nacional de Aprendizaje – SENA.
