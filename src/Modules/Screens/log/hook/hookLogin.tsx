// src/Modules/Screens/log/hook/hookLogin.tsx
// hookLogin.tsx
import { useState } from 'react';
import { auth } from 'src/Modules/Firebase'; // Importa la instancia de autenticación de Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importa la función para iniciar sesión
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const useLoginVerification = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicializar navigate

  const verifyUser = async (username: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      setIsVerified(true); // Usuario verificado
      setError(''); // Limpiar el error si la verificación es exitosa
      alert('Inicio de sesión exitoso'); // Mensaje de éxito
      navigate('/mapa2'); // Redirigir a la pantalla de mapa2.tsx
      return true;
    } catch (err: any) {
      setIsVerified(false);
      // Verificar si el error es de credenciales no válidas
      if (err.code === 'auth/invalid-credential') {
        setError('Usuario no registrado.'); // Mensaje específico para usuario no registrado
      } else {
        setError(err.message); // Establecer el mensaje de error
      }
      return false;
    }
  };

  return { isVerified, error, verifyUser };
};

export default useLoginVerification;
