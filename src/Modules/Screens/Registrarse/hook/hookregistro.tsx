// hookRegistro.tsx
import { useState } from 'react';
import { addUserToCollection } from 'src/Modules/Screens/Registrarse/hook/UsecollectionRegistro';
import { auth } from '../../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useRegistro = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    const registerUser = async (userData: { Nombre: string; Email: string; Contraseña: string }) => {
        try {
            await createUserWithEmailAndPassword(auth, userData.Email, userData.Contraseña);
            await addUserToCollection(userData);
            setIsRegistered(true);
        } catch (error) {
            setIsRegistered(false);
            console.error('Error al registrar usuario: ', error);
        }
    };

    return { registerUser, isRegistered };
};

export default useRegistro;
