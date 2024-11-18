import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from 'src/Modules/Firebase';

const useFirestoreCreateCrime = () => {
  const [isAdded, setIsAdded] = useState(false);

  const addCrime = async (crimeData: { tipo: string; detalles: string; ubicacion: string }) => {
    try {
      await addDoc(collection(db, 'Crimen'), {
        ...crimeData,
        timestamp: serverTimestamp()
      });
      setIsAdded(true);
    } catch (error) {
      console.error('Error al reportar el crimen:', error);
      setIsAdded(false);
    }
  };
  return { addCrime, isAdded };
};

export default useFirestoreCreateCrime;
