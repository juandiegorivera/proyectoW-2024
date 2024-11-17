import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/Modules/Firebase';

const useFirestoreCreateError = () => {
  const [isAdded, setIsAdded] = useState(false);

  const addError = async (errorData: { description: string }) => {
    try {
      await addDoc(collection(db, 'Errores'), errorData);
      setIsAdded(true);
    } catch (error) {
      console.error('Error al reportar el error:', error);
      setIsAdded(false);
    }
  };

  return { addError, isAdded };
};

export default useFirestoreCreateError;
