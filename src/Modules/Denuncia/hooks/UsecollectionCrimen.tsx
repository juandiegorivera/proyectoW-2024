import firestore from '@react-native-firebase/firestore';

// Función para agregar un nuevo crimen a Firestore
const addCrimen = async (tipoDeRobo: string, detalles: string, ubicacion: string) => {
  try {
    await firestore().collection('crimenes').add({
      tipoDeRobo,
      detalles,
      ubicacion,
    });
    console.log('Crimen agregado!');
  } catch (error) {
    console.error('Error al agregar crimen: ', error);
  }
};

// Exportar la función para que pueda ser utilizada en otros componentes
export default addCrimen;
