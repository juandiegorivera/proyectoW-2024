import { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const useFirestoreCreate = (collectionUsers: string, newItem: { username: string; email: string; role: string; }) => {
  const [isAdded, setIsAdded] = useState(false);
  const db = getFirestore();

  const addDocument = async () => {
    try {
      const docRef = await addDoc(collection(db, collectionUsers), {
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
