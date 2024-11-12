import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importación necesaria para autenticación
import { auth, db } from 'src/Modules/Firebase'; // Asegúrate de usar el módulo correcto de Firebase
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Interfaz para los datos de registro
interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Maneja los cambios de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para verificar si el usuario ya existe en Firestore
  const checkUserExists = async (uid: string): Promise<boolean> => {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.exists();
  };

  // Envío del formulario
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validateForm(formData);

    if (validationErrors.length === 0) {
      const { email, password, username, role } = formData;

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
        await setDoc(doc(db, 'users', user.uid), {
          username,
          email,
          role,
        });

        // Muestra el mensaje de éxito y redirige después de un pequeño retraso
        setSuccessMessage('Registro Exitoso');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error: unknown) {
        console.error("Error al registrar o guardar datos:", error);
        if (error instanceof Error) {
          if (error.message.includes('email-already-in-use')) {
            setErrors(['El correo electrónico ya está en uso.']);
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
  const validateForm = (data: RegisterFormData): string[] => {
    const errors = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo electrónico

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

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Regístrate</h2>
        <form onSubmit={handleFormSubmit}>
            <div style={styles.inputGroup}>
              <label htmlFor="username">Nombre de Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                style={styles.input}
                aria-invalid={errors.includes('El nombre de usuario debe tener al menos 3 caracteres.') ? 'true' : 'false'}
              />
              {errors.includes('El nombre de usuario debe tener al menos 3 caracteres.') && (
                <span style={styles.errorText}>El nombre de usuario debe tener al menos 3 caracteres.</span>
              )}
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={styles.input}
                aria-invalid={errors.includes('Por favor, ingrese un correo electrónico válido.') ? 'true' : 'false'}
              />
              {errors.includes('Por favor, ingrese un correo electrónico válido.') && (
                <span style={styles.errorText}>Por favor, ingrese un correo electrónico válido.</span>
              )}
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                style={styles.input}
                aria-invalid={errors.includes('La contraseña debe tener al menos 6 caracteres.') || errors.includes('La contraseña debe contener letras mayúsculas, minúsculas y números.') ? 'true' : 'false'}
              />
              {errors.includes('La contraseña debe tener al menos 6 caracteres.') && (
                <span style={styles.errorText}>La contraseña debe tener al menos 6 caracteres.</span>
              )}
              {errors.includes('La contraseña debe contener letras mayúsculas, minúsculas y números.') && (
                <span style={styles.errorText}>La contraseña debe contener letras mayúsculas, minúsculas y números.</span>
              )}
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                style={styles.input}
                aria-invalid={errors.includes('Las contraseñas no coinciden.') ? 'true' : 'false'}
              />
              {errors.includes('Las contraseñas no coinciden.') && (
                <span style={styles.errorText}>Las contraseñas no coinciden.</span>
              )}
            </div>
          {successMessage && <p aria-live="polite" style={styles.successMessage}>{successMessage}</p>}
          <button 
            type="submit" 
            style={{ ...styles.buttonSubmit, backgroundColor: isSubmitting ? '#7BB600' : '#99D500' }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Registrarse'}
          </button>
          <button type="button" onClick={handleBack} style={styles.buttonBack}>
            Volver
          </button>
        </form>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    width: '100vw',
  },
  formContainer: {
    backgroundColor: '#CAE9FF',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    textAlign: 'center' as React.CSSProperties['textAlign'],
    marginBottom: '20px',
    color: '#1B4965',
    fontSize: '24px',
    fontWeight: '600',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '96%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    transition: 'border-color 0.3s',
  },
  inputFocus: {
    borderColor: '#99D500',
    boxShadow: '0 0 5px rgba(153, 213, 0, 0.5)',
  },
  errorContainer: {
    marginBottom: '15px',
  },
  errorText: {
    color: 'red',
    fontSize: '14px',
  },
  buttonSubmit: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#99D500',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '10px',
    transition: 'background-color 0.3s',
  },
  buttonBack: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#62B6CB',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  },
  successMessage: {
    color: 'green',
    fontSize: '16px',
    marginBottom: '10px',
  },
};

export default RegisterForm;
