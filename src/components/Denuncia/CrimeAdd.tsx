import React, { useState } from 'react';
import { db } from './FirebaseConfig'; // Ajusta la ruta según tu estructura
import { collection, addDoc } from 'firebase/firestore';

interface CrimenAddProps {
  onAdd: () => void; // Define el tipo de la función onAdd
}

const CrimenAdd: React.FC<CrimenAddProps> = ({ onAdd }) => {
  const [tipo, setTipo] = useState<string>('');
  const [ubicacion, setUbicacion] = useState<string>('');
  const [detalles, setDetalles] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoCrimen = { tipo, ubicacion, detalles };
    try {
      await addDoc(collection(db, 'crimenes'), nuevoCrimen); // Cambia 'crimenes' a tu colección
      onAdd(); // También llama a onAdd si es necesario
      setTipo('');
      setUbicacion('');
      setDetalles('');
    } catch (error) {
      console.error("Error añadiendo crimen: ", error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de crimen:</label>
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
            placeholder="Ingrese la dirección o lugar del crimen"
          />
        </div>
        <div>
          <label>Detalles:</label>
          <textarea
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
            required
            placeholder="Describa los detalles del crimen"
            rows={4}
          />
        </div>
        <button type="submit">Denunciar Crimen</button>
      </form>
  );
};

export default CrimenAdd;
