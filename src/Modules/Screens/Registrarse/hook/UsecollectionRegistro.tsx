// UsecollecctionRegistro.tsx
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase';

export const addUserToCollection = async (userData: { Nombre: string; Email: string; Contraseña: string }) => {
    try {
        const userCollection = collection(db, 'Usuario');
        await addDoc(userCollection, userData);
        console.log('Usuario añadido exitosamente');
    } catch (error) {
        console.error('Error al añadir usuario: ', error);
    }
};
