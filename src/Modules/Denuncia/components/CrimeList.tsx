import React, { useState } from "react";

interface Crimen {
  tipoDeRobo: string;
  detalles: string;
  ubicacion: string;
}

interface CrimenListProps {
  crimen: Crimen[];
  onEdit: (index: number, updatedCrimen: Crimen) => void;
  onDelete: (index: number) => void;
}

const CrimenList: React.FC<CrimenListProps> = ({ crimen, onEdit, onDelete }) => {
  // Inicializamos el estado para saber qué crimen se está editando
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Estado para almacenar los datos del crimen que se está editando
  const [editCrimen, setEditCrimen] = useState<Crimen>({
    tipoDeRobo: "",
    detalles: "",
    ubicacion: "",
  });

  // Maneja los cambios en los campos del formulario de edición
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditCrimen({ ...editCrimen, [name]: value });
  };

  // Maneja el envío del formulario de edición
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      onEdit(editIndex, editCrimen);
      setEditIndex(null); // Salimos del modo de edición
    }
  };

  return (
    <ul>
      {crimen.map((c, index) => (
        <li key={index}>
          {editIndex === index ? (
            // Formulario de edición si el índice coincide
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="tipoDeRobo"
                value={editCrimen.tipoDeRobo}
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
              <input
                type="text"
                name="ubicacion"
                value={editCrimen.ubicacion}
                onChange={handleEditChange}
                required
              />
              <button type="submit">Guardar</button>
              <button type="button" onClick={() => setEditIndex(null)}>
                Cancelar
              </button>
            </form>
          ) : (
            // Mostrar detalles del crimen si no estamos editando
            <div>
              {c.tipoDeRobo} - {c.detalles} - {c.ubicacion}
              <button
                onClick={() => {
                  setEditIndex(index); // Establecer el índice para edición
                  setEditCrimen(c); // Rellenar los campos con el crimen seleccionado
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