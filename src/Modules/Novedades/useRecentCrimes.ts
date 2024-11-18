import { useState, useEffect } from 'react';
import { db } from '../Firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

const useRecentCrimes = () => {
  // Define el tipo de crimen
  type Crime = { tipo: string; ubicacion: string; detalles: string; id: string; timestamp: any };
  
  const [crimes, setCrimes] = useState<Crime[]>([]); // Especifica el tipo aquí

  useEffect(() => {
    const crimesRef = collection(db, 'Crimen');
    const recentCrimesQuery = query(crimesRef, orderBy('timestamp', 'desc'), limit(3));

    const unsubscribe = onSnapshot(recentCrimesQuery, (snapshot) => {
      const crimesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Crime[]; // Asegúrate de que los datos se ajusten al tipo Crime
      console.log('Crímenes recientes:', crimesData); // Verifica los datos recibidos
      console.log("Datos de crímenes procesados:", crimesData); // Agregado para verificar la estructura de los datos
      setCrimes(crimesData);
    });

    return () => unsubscribe();
  }, []);

  return crimes;
};

export default useRecentCrimes;
