import { useState, useEffect } from 'react';
import { db } from '../Firebase'; // Importa tu configuración de Firebase
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

interface Crime {
  id: string;
  tipo: string;
  detalles: string;
  ubicacion: string;
}

export const useRecentCrimes = () => {
  const [recentCrimes, setRecentCrimes] = useState<Crime[]>([]);

  useEffect(() => {
    const crimesRef = collection(db, 'Crimen');
    const q = query(crimesRef, orderBy('timestamp', 'desc'), limit(3));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const crimesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Crime[];
      console.log(crimesData);
      setRecentCrimes(crimesData);
    });

    return () => unsubscribe();
  }, []);

  return recentCrimes;
};
