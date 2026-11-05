
function RestaurantForm({
  onAgregarRestaurante,
  restauranteEditar,
  onActualizarRestaurante
}) {

  function manejarEnvio(event) {
    event.preventDefault();

    const datosRestaurante = {
      nombre: event.target.elements["item-name"].value.trim(),
      tipo_comida: event.target.elements["item-category"].value,
      descripcion: event.target.elements["item-desc"].value.trim(),
      numero_contacto: event.target.elements["item-number"].value.trim()
    };

    if (restauranteEditar) {
      onActualizarRestaurante({
        ...datosRestaurante,
        id: restauranteEditar.id
      });
    } else {
      onAgregarRestaurante(datosRestaurante);
    }

    event.target.reset();
  }

  return (
    <section className="form-section">
      <h2>
        {restauranteEditar
          ? "Editar restaurante"
          : "Registro de restaurantes"}
      </h2>

      <form
        key={restauranteEditar ? restauranteEditar.id : "nuevo"}
        onSubmit={manejarEnvio}
      >
        <div className="form-group">
          <label htmlFor="item-name">
            Nombre del restaurante
          </label>

          <input
            type="text"
            id="item-name"
            placeholder="Ej. Restaurante Parrilla llanera"
            minLength="3"
            defaultValue={restauranteEditar?.nombre || ""}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="item-category">
            Tipo de comida
          </label>

          <select
            id="item-category"
            required
            defaultValue={restauranteEditar?.tipo_comida || ""}
          >
            <option value="">Seleccione una opción</option>
            <option value="Comidas rápidas">Comidas rápidas</option>
            <option value="Comida típica">Comida típica</option>
            <option value="Comida italiana">Comida italiana</option>
            <option value="Comida tradicional colombiana">Comida tradicional colombiana</option>
            <option value="Comida asiática">Comida asiática</option>
            <option value="Parrilla y carnes">Parrilla y carnes</option>
            <option value="Comida de mar">Comida de mar</option>
            <option value="Postres y dulces">Postres y dulces</option>
            <option value="Heladería">Heladería</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Otras">Otras</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="item-desc">
            Descripción del restaurante
          </label>

          <textarea
            id="item-desc"
            placeholder="Describe tu restaurante..."
            rows="4"
            defaultValue={restauranteEditar?.descripcion || ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="item-number">
            Número de contacto
          </label>

          <input
            type="tel"
            id="item-number"
            placeholder="Ej. 3001234567"
            pattern="[0-9]{7,15}"
            title="Ingresa un número de contacto de 7 a 15 dígitos"
            defaultValue={restauranteEditar?.numero_contacto || ""}
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit">
            {restauranteEditar
              ? "Guardar cambios"
              : "Registrar restaurante"}
          </button>

          <button type="reset">
            Cancelar registro
          </button>
        </div>
      </form>
    </section>
  );
}

export default RestaurantForm;
