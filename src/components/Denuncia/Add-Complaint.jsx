import React, { useState } from "react";

const CrimenAdd = ({ onAdd }) => {
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [detalles, setDetalles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoCrimen = { tipo, ubicacion, detalles };
    onAdd(nuevoCrimen);
    setTipo("");
    setUbicacion("");
    setDetalles("");
  }; 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tipo de robo:</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="">Seleccione un tipo</option>
          <option value="Robo a casa">Robo a casa</option>
          <option value="Robo de vehículo">Robo de vehículo</option>
          <option value="Robo en la calle">Robo en la calle</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label>Ubicación:</label>
        <input
          type="text"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          required
          placeholder="Ingrese la dirección o lugar del robo"
        />
      </div>
      <div>
        <label>Detalles:</label>
        <textarea
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
          required
          placeholder="Describa los detalles del robo"
          rows="4"
        />
      </div>
      <button type="submit">Denunciar Robo</button>
    </form>
  );
};

export default CrimenAdd;
