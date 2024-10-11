import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { db } from './firebaseConfig'; // Ajusta la ruta según tu estructura
import { collection, addDoc } from 'firebase/firestore';

const ComplaintForm: React.FC = () => {
  const [tipoRobo, setTipoRobo] = useState<string>('');
  const [detalles, setDetalles] = useState<string>('');
  const [ubicacion, setUbicacion] = useState<string>('');

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'quejas'), {
        tipoRobo,
        detalles,
        ubicacion,
      });
      console.log("Queja añadida con éxito");
    } catch (error) {
      console.error("Error añadiendo queja: ", error);
    }
  };

  return (
    <View style={styles.form}>
    <Text style={styles.title}>Formulario de Denuncia</Text>
    
    <View>
      <Text style={styles.label}>Tipo de Robo:</Text>
      <Picker
        selectedValue={tipoRobo}
        onValueChange={(itemValue) => setTipoRobo(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Seleccione un tipo" value="" />
        <Picker.Item label="Robo de celular" value="celular" />
        <Picker.Item label="Robo de vehículo" value="vehiculo" />
        {/* Agrega más opciones según sea necesario */}
      </Picker>
    </View>

    <View>
      <Text style={styles.label}>Detalles:</Text>
      <TextInput
        value={detalles}
        onChangeText={setDetalles}
        multiline
        style={[styles.input, styles.textarea]}
      />
    </View>

    <View>
      <Text style={styles.label}>Ubicación:</Text>
      <TextInput
        value={ubicacion}
        onChangeText={setUbicacion}
        style={styles.input}
      />
    </View>

    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
      <Text style={styles.buttonText}>Enviar Denuncia</Text>
    </TouchableOpacity>
  </View>
  );
};

// styles remain the same...

export default ComplaintForm;
