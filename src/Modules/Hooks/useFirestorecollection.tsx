// Importa los hooks necesarios de React para gestionar el estado y efectos secundarios
import {useState, useEffect} from 'react';
// Importa la instancia de la base de datos de Firebase desde tu archivo de utilidades de Firebase
import {db} from '../utils/firebase';

/**
 * Hook personalizado para recuperar y suscribirse a una colección de Firestore.
 *
 * @param {string} collectionName - El nombre de la colección de Firestore a recuperar.
 * @returns {Array} data - Un array de documentos de la colección de Firestore.
 *
 * Este hook se suscribe a los cambios en la colección especificada de Firestore
 * utilizando el método `onSnapshot` de Firestore. Escucha actualizaciones en tiempo real
 * y actualiza el estado con los últimos datos de la colección.
 *
 * La suscripción se limpia automáticamente cuando el componente que utiliza este hook
 * se desmonta, evitando fugas de memoria.
 */
const useFirestoreCollection = (collectionName) => {
  // Estado para almacenar los datos de la colección
  const [data, setData] = useState([]);

  useEffect(() => {
    // Suscribirse a la colección de Firestore usando onSnapshot
    const unsubscribe = db.collection(collectionName).onSnapshot(snapshot => {
      // Mapea los documentos del snapshot y extrae los datos
      const items = snapshot.docs.map(doc => ({
        id: doc.id,        // Añade la ID del documento
        ...doc.data(),     // Expande los datos del documento
      }));
      // Actualiza el estado con los datos obtenidos
      setData(items);
    });

    // Cancelar la suscripción a la colección cuando el componente se desmonte
    return () => unsubscribe();
  }, [collectionName]);

  // Retorna los datos al componente que utiliza este hook
  return data;
};

export default useFirestoreCollection;
