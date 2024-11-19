// src/Modules/Screens/log/hook/UseCollectionLogin.tsx
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from 'src/Modules/Firebase';

const checkIfUserExists = async (email: string): Promise<boolean> => {
  const q = query(collection(db, 'Usuario'), where('email', '==', email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty; // Retorna true si existe al menos un documento
};

export default checkIfUserExists;
