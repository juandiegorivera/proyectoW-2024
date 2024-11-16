import { useState } from 'react';
import { auth, db } from 'src/Modules/Firebase'; // Asegúrate de usar el módulo correcto de Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import useFirestoreCreate from 'src/Modules/Screens/Registrarse/hook/UsecollectionRegistro'; // Importa el hook

// Hook para manejar el registro de usuario
const useRegister = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [formData] = useState<{ username: string; email: string; role: string }>({
    username: '',
    email: '',
    role: 'Usuario',
  });
  const { username, email, role } = formData; 
  const { addDocument } = useFirestoreCreate('Usuario'); // Pasar solo un argumento

  // Función para verificar si el usuario ya existe en Firestore
  const checkUserExists = async (uid: string): Promise<boolean> => {
    const userDoc = await getDoc(doc(db, 'Usuario', uid)); // Cambié aquí a "Usuario"
    return userDoc.exists();
  };

  // Envío del formulario
  const handleFormSubmit = async (formData: any, navigate: any) => {
    const { email, username, role, password } = formData;
    const validationErrors = validateForm(formData);
    setIsSubmitting(true);

    if (validationErrors.length === 0) {
      try {
        // Crear usuario con autenticación de Firebase
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Verificar si el usuario ya existe
        const userExists = await checkUserExists(user.uid);
        if (userExists) {
          setErrors(['El usuario ya existe en la base de datos.']);
          setIsSubmitting(false);
          return;
        }

        // Guardar datos adicionales en Firestore
        await addDocument({ username, email, role });

        // Muestra el mensaje de éxito y redirige después de un pequeño retraso
        setSuccessMessage('Registro Exitoso');
        alert('Se registró exitosamente');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } catch (error: unknown) {
        console.error("Error al registrar o guardar datos:", error);
        if (error instanceof Error) {
          if (error.message.includes('email-already-in-use')) {
            alert('El correo electrónico ya está en uso. Por favor, intenta con otro.');
            setErrors(['El correo electrónico ya está en uso.']);
          } else if (error.message.includes('Failed to get document because the client is offline')) {
            alert('Error de conexión: parece que estás offline. Por favor, verifica tu conexión a Internet.');
            setErrors(['Error de conexión: parece que estás offline.']);
          } else {
            setErrors(['Error al registrar o guardar datos: ' + error.message]);
          }
        } else {
          setErrors(['Error desconocido']);
        }
      }
    } else {
      setErrors(validationErrors);
    }
    setIsSubmitting(false);
  };

  // Validación del formulario
  const validateForm = (data: any): string[] => {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (data.password !== data.confirmPassword) {
      errors.push('Las contraseñas no coinciden.');
    }
    if (!emailRegex.test(data.email)) {
      errors.push('Por favor, ingrese un correo electrónico válido.');
    }
    if (data.password.length < 6) {
      errors.push('La contraseña debe tener al menos 6 caracteres.');
    }
    if (!/[A-Z]/.test(data.password) || !/[a-z]/.test(data.password) || !/[0-9]/.test(data.password)) {
      errors.push('La contraseña debe contener letras mayúsculas, minúsculas y números.');
    }
    if (data.username.length < 3) {
      errors.push('El nombre de usuario debe tener al menos 3 caracteres.');
    }
    return errors;
  };

  return { handleFormSubmit, errors, isSubmitting, successMessage };
};

export default useRegister;
