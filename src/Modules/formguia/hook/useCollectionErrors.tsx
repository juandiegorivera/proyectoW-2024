import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/Modules/Firebase';

export const addErrorToCollection = async (errorData: { description: string }) => {
  try {
    const errorCollection = collection(db, 'Errores');
    await addDoc(errorCollection, errorData);
    console.log('Error añadido exitosamente');
  } catch (error) {
    console.error('Error al añadir el error:', error);
  }
};
