import React from 'react';
import { StyleSheet } from 'react-native';

const AppGuide: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Sección de notificación de error */}
      <div style={styles.errorSection}>
        <label style={styles.label}>notificar error</label>
        <input type="text" style={styles.input} />
        <button style={styles.button}>Enviar</button>
      </div>

      {/* Sección de guía de la app */}
      <div style={styles.guideSection}>
        <h3 style={styles.guideTitle}>Guía de la App:</h3>
        <ul style={styles.guideList}>
          <li>
            <span style={styles.icon}>📰</span> 
            En el menú de novedades se podrán los casos más recientes de la ciudad.
          </li>
          <li>
            <span style={styles.icon}>📢</span> 
            En el menú de Realizar denuncia podrás anunciar a los administradores de la app o a las autoridades tu caso mediante un formulario.
          </li>
          <li>
            <span style={styles.icon}>📞</span> 
            En el menú de Líneas de ayuda se te mostrarán los números telefónicos de las líneas de emergencia de la ciudad.
          </li>
        </ul>
      </div>
    </div>
  );
};

// Estilos en línea
const styles = StyleSheet.create({
  container: {
    padding: 10,
    fontFamily: 'Arial, sans-serif',
    // Nota: La propiedad 'background' no es compatible con React Native
    // Deberás usar una imagen de fondo de otra manera, por ejemplo con un componente ImageBackground
    color: '#333',
    width: '40%', 
  },
  errorSection: {
    marginBottom: 20,
  },
  label: {
    display: 'flex',
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: '100%',
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 5,
  },
  guideSection: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 8,
  },
  guideTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  guideList: {
    // listStyleType no es necesario en React Native
    padding: 0,
  },
  icon: {
    marginRight: 8,
    fontSize: 18,
  },
});

export default AppGuide;
