import React, { useState } from 'react';

const GoogleLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    console.log('Iniciar sesión con Google');
  };

  const handleSignUp = () => {
    console.log('Redirigir a la página de registro');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Por favor, complete todos los campos.');
    } else {
      console.log('Iniciando sesión con nombre de usuario:', username);
    }
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
      backgroundColor: '#cca9dd',
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
    googleButton: {
      backgroundColor: 'purple',
      color: 'white',
    },
    signupButton: {
      backgroundColor: '#EF007E',
      color: 'white',
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
  };

  return (
    <div style={styles.container}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
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
        onClick={handleSignUp}
      >
        Regístrate aquí
      </button>
    </div>
  );
};

export default GoogleLogin;








