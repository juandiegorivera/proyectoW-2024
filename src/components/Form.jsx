//Form.jsx
import React, { useState } from 'react';
import { View, Text, Picker, TextInput, Button, StyleSheet } from 'react-native';

const DenunciaForm = () => {
  const [tipoDenuncia, setTipoDenuncia] = useState('asalto');
  const [informacionAdicional, setInformacionAdicional] = useState('');

  const handleTipoDenunciaChange = (value) => {
    setTipoDenuncia(value);
  };

  const handleInformacionAdicionalChange = (text) => {
    setInformacionAdicional(text);
  };

  const handleSubmit = () => {
    // Aquí podrías implementar la lógica para enviar los datos
    // Por ejemplo, puedes hacer una llamada a una API o realizar alguna acción con los datos seleccionados
    console.log(`Tipo de denuncia: ${tipoDenuncia}`);
    console.log(`Información adicional: ${informacionAdicional}`);
    // Aquí puedes resetear los campos después de enviar el formulario
    setTipoDenuncia('asalto');
    setInformacionAdicional('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realizar Denuncia</Text>
      <Picker
        selectedValue={tipoDenuncia}
        style={styles.picker}
        onValueChange={handleTipoDenunciaChange}
      >
        <Picker.Item label="Asalto" value="asalto" />
        <Picker.Item label="Denuncia de domicilio" value="denunciaDomicilio" />
        <Picker.Item label="Choque" value="choque" />
        <Picker.Item label="Otro" value="otro" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Información adicional"
        value={informacionAdicional}
        onChangeText={handleInformacionAdicionalChange}
        multiline
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'blue',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default DenunciaForm;
