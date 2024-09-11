import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ComplaintForm = () => {
  const [tipoRobo, setTipoRobo] = useState('');
  const [detalles, setDetalles] = useState('');
  const [ubicacion, setUbicacion] = useState('');

  const handleSubmit = () => {
    console.log({ tipoRobo, detalles, ubicacion });
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

const styles = StyleSheet.create({
  form: {
    maxWidth: 500,
    margin: 20,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  textarea: {
    height: 100,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ComplaintForm;
