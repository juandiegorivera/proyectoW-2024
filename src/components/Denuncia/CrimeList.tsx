import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig'; // Ajusta la ruta según tu estructura
import { collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const CrimenList: React.FC<CrimenListProps> = ({ onEdit }) => {
  const [crimenes, setCrimenes] = useState<Crimen[]>([]);

  useEffect(() => {
    const fetchCrimenes = async () => {
      const querySnapshot = await getDocs(collection(db, 'crimenes'));
      const crimenList: Crimen[] = [];
      querySnapshot.forEach((doc) => {
        crimenList.push({ ...doc.data(), id: doc.id } as Crimen); // Asumiendo que el ID es importante
      });
      setCrimenes(crimenList);
    };

    fetchCrimenes();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'crimenes', id));
    setCrimenes(crimenes.filter((crimen) => crimen.id !== id)); // Actualiza el estado
  };

  return (
    <ul>
    {crimenes.map((crimen) => (
      <li key={crimen.id}>
        {editIndex === crimen.index ? (
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
            {crimen.tipo} {crimen.ubicacion} - {crimen.detalles} -{" "}
            <button
              onClick={() => {
                setEditIndex(crimen.index);
                setEditCrimen(crimen);
              }}
            >
              Editar
            </button>
            <button onClick={() => handleDelete(crimen.id)}>Eliminar</button>
          </div>
        )}
      </li>
    ))}
  </ul>
  );
};

export default CrimenList;
