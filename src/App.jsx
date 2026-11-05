
import { useState, useEffect } from "react";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantTable from "./components/RestaurantTable";
import "./App.css";

const API_URL = "http://localhost:3000/api/restaurantes";

async function obtenerRestaurantes() {
  const respuesta = await fetch(API_URL);

  if (!respuesta.ok) {
    throw new Error("No se pudieron consultar los restaurantes");
  }

  return await respuesta.json();
}

function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [restauranteEditar, setRestauranteEditar] = useState(null);

  // Consultar los restaurantes al iniciar la aplicación
  useEffect(() => {
    obtenerRestaurantes()
      .then((datos) => setRestaurantes(datos))
      .catch((error) => {
        console.error(error);
        alert("Error al cargar los restaurantes desde MySQL");
      });
  }, []);

  // Registrar un restaurante
  async function agregarRestaurante(nuevoRestaurante) {
    try {
      const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoRestaurante)
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(resultado.mensaje);
      }

      const datos = await obtenerRestaurantes();
      setRestaurantes(datos);

      alert(resultado.mensaje);
    } catch (error) {
      console.error(error);
      alert(error.message || "Error al registrar el restaurante");
    }
  }

  // Eliminar un restaurante
  async function eliminarRestaurante(id) {
    try {
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(resultado.mensaje);
      }

      const datos = await obtenerRestaurantes();
      setRestaurantes(datos);

      alert(resultado.mensaje);
    } catch (error) {
      console.error(error);
      alert(error.message || "Error al eliminar el restaurante");
    }
  }

  // Seleccionar un restaurante para editar
  function seleccionarRestaurante(restaurante) {
    setRestauranteEditar(restaurante);
  }

  // Actualizar un restaurante
  async function actualizarRestaurante(restauranteActualizado) {
    try {
      const respuesta = await fetch(
        `${API_URL}/${restauranteActualizado.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(restauranteActualizado)
        }
      );

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(resultado.mensaje);
      }

      const datos = await obtenerRestaurantes();
      setRestaurantes(datos);
      setRestauranteEditar(null);

      alert(resultado.mensaje);
    } catch (error) {
      console.error(error);
      alert(error.message || "Error al actualizar el restaurante");
    }
  }

  return (
    <main className="container">
      <header className="page-header">
        <h1>Panel de registro de restaurantes</h1>
        <p>Mesero Virtual · Evidencia GA7</p>
      </header>

      <div className="dashboard">
        <RestaurantForm
          onAgregarRestaurante={agregarRestaurante}
          restauranteEditar={restauranteEditar}
          onActualizarRestaurante={actualizarRestaurante}
        />

        <RestaurantTable
          restaurantes={restaurantes}
          onEliminarRestaurante={eliminarRestaurante}
          onSeleccionarRestaurante={seleccionarRestaurante}
        />
      </div>
    </main>
  );
}

export default App;
