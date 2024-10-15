import React, { useState } from 'react';
import { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';

// Interfaz que define la estructura de los datos del formulario de registro
interface RegisterFormData {
  username: string; // Nombre de usuario
  email: string;    // Correo electrónico
  password: string; // Contraseña
  confirmPassword: string; // Confirmación de la contraseña
}

// Componente funcional para el formulario de registro
const RegisterForm: React.FC = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Estado para almacenar los errores de validación
  const [errors, setErrors] = useState<string[]>([]);

  // Maneja los cambios en los campos de entrada del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, // Mantiene los datos existentes
      [e.target.name]: e.target.value, // Actualiza el campo correspondiente
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const validationErrors = validateForm(formData); // Valida los datos del formulario
    if (validationErrors.length === 0) {
      console.log('Registrando usuario:', formData); // Muestra los datos en la consola
      // Lógica para añadir un nuevo usuario (enviar a API o backend)
      // Aquí agregarías tu lógica para conectar con la base de datos o backend
    } else {
      setErrors(validationErrors); // Establece los errores de validación en el estado
    }
  };

  // Función para validar los datos del formulario
  const validateForm = (data: RegisterFormData): string[] => {
    const errors = []; // Array para almacenar los errores
    if (data.password !== data.confirmPassword) {
      errors.push('Las contraseñas no coinciden.'); // Error si las contraseñas no coinciden
    }
    if (!data.email.includes('@')) {
      errors.push('Por favor, ingrese un correo válido.'); // Error si el correo no es válido
    }
    if (data.password.length < 6) {
      errors.push('La contraseña debe tener al menos 6 caracteres.'); // Error si la contraseña es corta
    }
    if (data.username.length < 3) {
      errors.push('El nombre de usuario debe tener al menos 3 caracteres.'); // Error si el nombre de usuario es corto
    }
    return errors; // Devuelve el array de errores
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Redirige a la página de inicio
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Regístrate</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" style={styles.buttonSubmit}>
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

// Definición de estilos con tipado adecuado para CSSProperties

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffcaaf',
    padding: '20px', // Para evitar que quede pegado a los bordes en pantallas pequeñas
    width: '100vw',  // Asegura que el contenedor tome todo el ancho
  },
  formContainer: {
    backgroundColor: '#cca9dd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '50%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#EF007E',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
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
    backgroundColor: '#EF007E',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  buttonBack: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#ccc', // Cambia el color si es necesario
    color: '#000', // Cambia el color si es necesario
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default RegisterForm;
