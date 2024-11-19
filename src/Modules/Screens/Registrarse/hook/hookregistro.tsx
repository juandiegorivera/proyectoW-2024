import { useState } from 'react';
import { addUserToCollection } from 'src/Modules/Screens/Registrarse/hook/UsecollectionRegistro';
import { auth } from '../../../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useRegistro = (navigate: (path: string) => void) => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Agrega el estado para el error

    const registerUser = async (userData: { Nombre: string; Email: string; Contraseña: string }) => {
        try {
            await createUserWithEmailAndPassword(auth, userData.Email, userData.Contraseña);
            await addUserToCollection(userData);
            setIsRegistered(true);
            setErrorMessage(null); // Resetea el error en caso de éxito

            setTimeout(() => {
              alert('Serás enviado a la página de inicio de sesión.');
              navigate('/login');
            }, 500);
        } catch (error: any) {
            setIsRegistered(false);
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('El correo que intentas utilizar ya está registrado');
            } else {
                setErrorMessage('Error al registrar usuario'); // Otro mensaje genérico
            }
            console.error('Error al registrar usuario: ', error);
        }
    };

    return { registerUser, isRegistered, errorMessage }; // Devuelve también el mensaje de error
};

export default useRegistro;
