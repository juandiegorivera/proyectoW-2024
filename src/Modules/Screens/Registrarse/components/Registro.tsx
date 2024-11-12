import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Importación necesaria para autenticación
import { auth, db } from 'src/Modules/Firebase'; // Asegúrate de usar el módulo correcto de Firebase
import { doc, setDoc } from 'firebase/firestore';

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

  // Maneja los cambios de entrada
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

        // Guardar datos adicionales en Firestore
        await setDoc(doc(db, 'users', user.uid), {
          username,
          email,
          role,
        });

        alert('Registro Exitoso');
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'user',
        });
        navigate('/login');
      } catch (error: unknown) { // Especificar el tipo de error
        if (error instanceof Error) { // Verificar si es una instancia de Error
          console.error('Error al registrar o guardar datos:', error);
          alert(`Error: ${error.message}`);
        } else {
          console.error('Error desconocido:', error);
          alert('Error desconocido');
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
    if (data.password !== data.confirmPassword) {
      errors.push('Las contraseñas no coinciden.');
    }
    if (!data.email.includes('@')) {
      errors.push('Por favor, ingrese un correo válido.');
    }
    if (data.password.length < 6) {
      errors.push('La contraseña debe tener al menos 6 caracteres.');
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
            />
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
            />
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
            />
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
            />
          </div>
          {errors.length > 0 && (
            <div style={styles.errorContainer}>
              <ul>
                {errors.map((error, index) => (
                  <li key={index} style={styles.errorText}>
                    {error}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button 
            type="submit" 
            style={{ ...styles.buttonSubmit, backgroundColor: isSubmitting ? '#7BB600' : '#99D500' }}
          >
            Registrarse
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
  },
};

export default RegisterForm;
