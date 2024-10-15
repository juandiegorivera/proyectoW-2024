// src/screens/Dashboard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Función para cerrar sesión
  const handleLogout = () => {
    // Aquí deberías eliminar el token de autenticación o limpiar la sesión del usuario
    localStorage.removeItem('authToken');
    
    // Redirigir al usuario a la pantalla de inicio de sesión
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1>Bienvenido al Dashboard</h1>
      <p>Este es el panel de control al que solo los usuarios autenticados pueden acceder.</p>
      
      <button onClick={handleLogout} style={styles.button}>
        Cerrar sesión
      </button>
    </div>
  );
};

// Estilos básicos para el componente (puedes usar CSS o frameworks como Tailwind)
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center' as const, // Asegúrate de que sea un valor específico
  },
  button: {
    padding: '10px 20px',
    marginTop: '20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Dashboard;
