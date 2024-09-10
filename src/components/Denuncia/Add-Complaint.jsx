import React, { useState } from "react";

const CrimenAdd = ({ onAdd }) => {
  const [Tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [detalles, setDetalles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoCrimen = { tipo , ubicacion , detalles };
    onAdd(nuevoCrimen);
    setTipo("");
    setUbicacion("");
    setDetalles("");
  }; 

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ubicacion:</label>
        <input
          type="text"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Detalles:</label>
        <input
          type="Detalles"
          value={detalles}
          onChange={(e) => setDetalles(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tipo:</label>
        <input
          type="text"
          value={Tipo}
          onChange={(e) => setipo(e.target.value)}
          required
        />
      </div>
      <button type="submit">Denunciar Crimen</button>
    </form>
  );
};

export default CrimenAdd;
