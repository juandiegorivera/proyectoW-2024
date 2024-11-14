import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoginVerification from 'src/Modules/Screens/log/hook/hookLogin';

const FormLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { isVerified, error: verificationError, verifyUser } = useLoginVerification();

  const handleFormLogin = () => {
    console.log('Iniciar sesión con Google');
    navigate('/'); // Redirige al menú desplegable
  };

  const handleSignUp = () => {
    console.log('Redirigir a la página de registro');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Por favor, complete todos los campos.');
    } else {
      const result = await verifyUser(username, password);
      if (result) {
        navigate('/'); // Redirige al menú desplegable
      } else {
        setError(verificationError || 'Usuario o contraseña incorrectos.');
      }
    }
  };

  const handleBack = () => {
    navigate('/'); // Redirige a la página de inicio
  };

// Estilos en línea
const styles = {
  container: {
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    margin: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#CAE9FF', // Fondo de las tarjetas de información
    maxWidth: '400px',
    height: 'auto',
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    margin: '10px 0', // Espaciado vertical entre botones
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%', // Ancho completo
  },
  FormloginButton: {
    backgroundColor: '#1B4965', // Color oscuro para "Iniciar sesión"
    color: '#FFFFFF', // Texto en blanco para contraste
  },
  signupButton: {
    backgroundColor: '#62B6CB', // Color claro para "Registrarse"
    color: '#FFFFFF',
  },
  backButton: {
    backgroundColor: '#99D500', // Verde para "Volver" o "Confirmar"
    color: '#FFFFFF',
  },
  input: {
    margin: '4px 0',
    padding: '4px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    width: '100%',
  },
  error: {
    color: 'red',
  },
  googleButton: {
    backgroundColor: '#99d500',
    color: 'white',
  },
};



  return (
    <div style={styles.container}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Gmail"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={{ ...styles.button, ...styles.googleButton }}>
          Iniciar sesión
        </button>
      </form>
      <p>¿No tienes una cuenta?</p>
      <button
        style={{ ...styles.button, ...styles.signupButton }}
        onClick={() => navigate('/register')}
      >
        Registrarse
      </button>
      <button type="button" onClick={handleBack} style={styles.button}>
        Volver
      </button>
    </div>
  );
};

export default FormLogin;








