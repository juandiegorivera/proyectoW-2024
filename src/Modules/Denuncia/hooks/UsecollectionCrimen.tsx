import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/Modules/Firebase'; // Usa la instancia db desde firebase.tsx

const addCrimen = (Usuario: string) => {
  const [isAdded, setIsAdded] = useState(false);

  const addDocument = async (newItem: { tipoDeRobo: string; detalles: string; ubicacion: string; }) => {
    try {
      const docRef = await addDoc(collection(db, "Crimen"), { // Se utiliza db exportado
        tipoDeRobo: newItem.tipoDeRobo,
        detalles: newItem.detalles,
        ubicacion: newItem.ubicacion,
      });
      setIsAdded(true);
    } catch (error) {
      console.error('Error al agregar el crimen:', error);
      setIsAdded(false);
    }
  };

  return { addDocument, isAdded };
};

export default addCrimen;