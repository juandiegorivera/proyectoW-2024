import React, { useState } from 'react';
import { CSSProperties } from 'react';

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (validationErrors.length === 0) {
      console.log('Formulario enviado exitosamente:', formData);
      // Aquí puedes agregar la lógica para enviar el formulario
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data: RegisterFormData): string[] => {
    const errors = [];
    if (data.password !== data.confirmPassword) {
      errors.push('Contraseña incorrecta');
    }
    if (!data.email.includes('@')) {
      errors.push('Correo inválido');
    }
    if (data.username.length < 3) {
      errors.push('El nombre de usuario debe tener por lo menos 3 caracteres');
    }
    return errors;
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Registrate</h2>
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
            <label htmlFor="email">Gmail:</label>
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
          <button type="submit" style={styles.button}>
            Registrarse
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
};

export default RegisterForm;
