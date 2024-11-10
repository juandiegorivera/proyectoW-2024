import firestore from '@react-native-firebase/firestore';

// Función para agregar un nuevo registro a Firestore
const addRegistro = async (username: string, email: string, password: string) => {
  try {
    await firestore().collection('registros').add({
      username,
      email,
      password,
    });
    console.log('Registro agregado!');
  } catch (error) {
    console.error('Error al agregar registro: ', error);
  }
};


// Exportar la función para que pueda ser utilizada en otros componentes
export default addRegistro;
