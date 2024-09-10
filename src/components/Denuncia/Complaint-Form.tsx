import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Paragraph, Card, useTheme } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';


const DenunciaForm: React.FC = () => {
  const [tipoDenuncia, setTipoDenuncia] = useState<string>('asalto');
  const [informacionAdicional, setInformacionAdicional] = useState<string>('');
  const theme = useTheme();

  const handleSubmit = () => {
    console.log(`Tipo de denuncia: ${tipoDenuncia}`);
    console.log(`Información adicional: ${informacionAdicional}`);
    setTipoDenuncia('asalto');
    setInformacionAdicional('');
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Realizar Denuncia</Title>
          <Paragraph>Seleccione el tipo de denuncia:</Paragraph>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={tipoDenuncia}
              style={styles.picker}
              onValueChange={(value) => setTipoDenuncia(value)}
            >
              <Picker.Item label="Asalto" value="asalto" />
              <Picker.Item label="Denuncia de domicilio" value="denunciaDomicilio" />
              <Picker.Item label="Choque" value="choque" />
              <Picker.Item label="Otro" value="otro" />
            </Picker>
          </View>
          <TextInput
            label="Información adicional"
            value={informacionAdicional}
            onChangeText={setInformacionAdicional}
            multiline
            numberOfLines={4}
            mode="outlined"
            style={styles.input}
          />
          <Button 
            mode="contained" 
            onPress={handleSubmit}
            style={styles.button}
            labelStyle={styles.buttonText}
          >
            Enviar
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  card: {
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  picker: {
    height: 50,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default DenunciaForm;
