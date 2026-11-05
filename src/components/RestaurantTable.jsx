
function RestaurantTable({
  restaurantes,
  onEliminarRestaurante,
  onSeleccionarRestaurante
}) {
  return (
    <section className="table-section">
      <h2>Restaurantes registrados</h2>
      <p className="storage-label">(Base de datos MySQL)</p>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo de comida</th>
            <th>Descripción</th>
            <th>Número de contacto</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {restaurantes.length === 0 ? (
            <tr>
              <td colSpan="5">
                No hay restaurantes registrados.
              </td>
            </tr>
          ) : (
            restaurantes.map((restaurante) => (
              <tr key={restaurante.id}>
                <td>{restaurante.nombre}</td>
                <td>{restaurante.tipo_comida}</td>
                <td>{restaurante.descripcion}</td>
                <td>{restaurante.numero_contacto}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      onSeleccionarRestaurante(restaurante)
                    }
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      onEliminarRestaurante(restaurante.id)
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
}

export default RestaurantTable;
