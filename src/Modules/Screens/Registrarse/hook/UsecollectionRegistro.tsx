import { useState } from 'react';
import {collection, addDoc } from 'firebase/firestore';
import { db } from 'src/Modules/Firebase';

const useFirestoreCreate = (Usuario: string) => {
  const [isAdded, setIsAdded] = useState(false);

  const addDocument = async (newItem: { username: string; email: string; role: string; }) => {
    try {
      const docRef = await addDoc(collection(db, "Usuario"), {  
        username: newItem.username,
        email: newItem.email,
        role: newItem.role,
      });
      setIsAdded(true);
    } catch (error) {
      console.error('Error adding document:', error);
      setIsAdded(false);
    }
  };

  return { addDocument, isAdded };
};

export default useFirestoreCreate;
