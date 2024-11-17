// hookRegistro.tsx
import { useState } from 'react';
import { addUserToCollection } from 'src/Modules/Screens/Registrarse/hook/UsecollectionRegistro';
import { auth } from '../../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useRegistro = (navigate: (path: string) => void) => {
    const [isRegistered, setIsRegistered] = useState(false);

    const registerUser = async (userData: { Nombre: string; Email: string; Contraseña: string }) => {
        try {
            await createUserWithEmailAndPassword(auth, userData.Email, userData.Contraseña);
            await addUserToCollection(userData);
            setIsRegistered(true);
            
            setTimeout(() => {
              alert('Serás enviado a la página de inicio de sesión.');
              navigate('/login');
            }, 500); // Espera 100 ms antes de redirigir
        } catch (error) {
            setIsRegistered(false);
            console.error('Error al registrar usuario: ', error);
        }
    };

    return { registerUser, isRegistered };
};

export default useRegistro;
