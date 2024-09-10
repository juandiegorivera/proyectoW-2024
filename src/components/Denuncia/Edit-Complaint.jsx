import React, { useState } from "react";

const CrimenList = ({ Crimen, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editCrimen, setEditCrimen] = useState({
    tipo: "",
    ubicacion: "",
    detalles: "",
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditCrimen({ ...editCrimen, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(editIndex, editCrimen);
    setEditIndex(null);
  };

  return (
    <ul>
      {Crimen.map((Crimen, index) => (
        <li key={index}>
          {editIndex === index ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="tipo"
                value={editCrimen.tipo}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="ubicacion"
                value={editCrimen.ubicacion}
                onChange={handleEditChange}
                required
              />
              <input
                type="text"
                name="detalles"
                value={editCrimen.detalles}
                onChange={handleEditChange}
                required
              />
              
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setEditIndex(null)}>
                Cancelar
              </button>
            </form>
          ) : (
            <div>
              {Crimen.tipo} {Crimen.ubicacion} - {Crimen.detalles} -{" "}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setEditCrimen(Crimen);
                }}
              >
                Editar
              </button>
              <button onClick={() => onDelete(index)}>Eliminar</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CrimenList;