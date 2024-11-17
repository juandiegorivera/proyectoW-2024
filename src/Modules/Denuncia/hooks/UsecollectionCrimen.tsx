// UsecollecctionRegistro.tsx
import { collection, addDoc } from 'firebase/firestore';
import { db } from 'src/Modules/Firebase';

export const addCrimenToCollection = async (crimeData: { tipo: string; detalles: string; ubicacion: string }) => {
    try {
        const userCollection = collection(db, 'Crimen');
        await addDoc(userCollection, crimeData);
        console.log('Crimen añadido exitosamente');
    } catch (error) {
        console.error('Error al añadir crimen: ', error);
    }
};
