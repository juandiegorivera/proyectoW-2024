import React, { useEffect, useState } from 'react';
import { db } from './FirebaseConfig'; 
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

interface Crimen {
  id: number; // Asegúrate de que 'id' esté definido aquí
  index: number;
  tipo: string; // Asegúrate de que 'tipo' esté definido
  ubicacion: string;
  detalles: string;
}

interface CrimenListProps {
  onEdit: (id: number) => void; // Ajusta el tipo según sea necesario
}

const CrimenList: React.FC<CrimenListProps> = ({ onEdit }) => {
  const [crimenes, setCrimenes] = useState<Crimen[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null); // Agregar esta línea para definir editIndex
  const [editCrimen, setEditCrimen] = useState<{ ubicacion: string; tipo?: string; detalles?: string }>({ ubicacion: '' });

  useEffect(() => {
    const fetchCrimenes = async () => {
      const querySnapshot = await getDocs(collection(db, 'crimenes'));
      const crimenList: Crimen[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Crimen; // Aseguramos que los datos son del tipo Crimen
        // Cambia el tipo de 'id' en 'Crimen' a 'string' si es necesario
        // Asegúrate de que el tipo 'Crimen' tenga 'id' como 'string'
        crimenList.push({ ...data, id: doc.id } as unknown as Crimen); // Aseguramos que el objeto cumpla con el tipo 'Crimen'
      });
      setCrimenes(crimenList);
    };

    fetchCrimenes();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'crimenes', id));
    setCrimenes(crimenes.filter((crimen: Crimen) => Number(crimen.id) !== Number(id))); // Convierte ambos a número
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditCrimen({ ...editCrimen, ubicacion: event.target.value });
  };

  const handleEditSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Lógica para manejar la edición
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
              value={editCrimen.tipo as string} // Asegúrate de que 'tipo' esté definido en el tipo de 'editCrimen'
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
              value={editCrimen.detalles as string} // Asegúrate de que 'detalles' esté definido en el tipo de 'editCrimen'
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
                setEditCrimen({ ...crimen, tipo: '', detalles: '', ubicacion: crimen.ubicacion }); // Asegúrate de incluir 'ubicacion'
              }}
            >
              Editar
            </button>
            <button onClick={() => handleDelete(String(crimen.id))}>Eliminar</button> // Convierte 'id' a string
          </div>
        )}
      </li>
    ))}
  </ul>
  );
};

export default CrimenList;
