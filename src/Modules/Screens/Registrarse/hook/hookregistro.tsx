// hookRegistro.tsx
import { useState } from 'react';
import { addUserToCollection } from 'src/Modules/Screens/Registrarse/hook/UsecollectionRegistro';

const useRegistro = () => {
    const [isRegistered, setIsRegistered] = useState(false);

    const registerUser = async (userData: { Nombre: string; Email: string; Contraseña: string }) => {
        try {
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
